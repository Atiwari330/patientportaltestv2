import { pgTable, serial, text, integer, timestamp, boolean, json, varchar, decimal } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  password: text('password'),
  role: text('role').notNull().default('patient'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const patients = pgTable('patients', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  dateOfBirth: timestamp('date_of_birth'),
  phone: text('phone'),
  emergencyContact: text('emergency_contact'),
  conditions: json('conditions').$type<string[]>().default([]),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const assessments = pgTable('assessments', {
  id: serial('id').primaryKey(),
  patientId: integer('patient_id').notNull().references(() => patients.id),
  type: varchar('type', { length: 50 }).notNull(), // PHQ-9, GAD-7, etc.
  status: varchar('status', { length: 20 }).notNull().default('pending'),
  responses: json('responses').$type<Record<string, number>>().notNull(),
  score: integer('score').notNull(),
  severity: varchar('severity', { length: 20 }),
  riskLevel: varchar('risk_level', { length: 20 }),
  completedAt: timestamp('completed_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const appointments = pgTable('appointments', {
  id: serial('id').primaryKey(),
  patientId: integer('patient_id').notNull().references(() => patients.id),
  providerId: integer('provider_id').references(() => users.id),
  scheduledAt: timestamp('scheduled_at').notNull(),
  duration: integer('duration').notNull().default(60), // minutes
  status: varchar('status', { length: 20 }).notNull().default('scheduled'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const progressGoals = pgTable('progress_goals', {
  id: serial('id').primaryKey(),
  patientId: integer('patient_id').notNull().references(() => patients.id),
  title: text('title').notNull(),
  description: text('description'),
  targetValue: decimal('target_value', { precision: 5, scale: 2 }),
  currentValue: decimal('current_value', { precision: 5, scale: 2 }).default('0'),
  status: varchar('status', { length: 20 }).notNull().default('active'),
  completedAt: timestamp('completed_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const homework = pgTable('homework', {
  id: serial('id').primaryKey(),
  patientId: integer('patient_id').notNull().references(() => patients.id),
  appointmentId: integer('appointment_id').references(() => appointments.id),
  title: text('title').notNull(),
  description: text('description'),
  dueDate: timestamp('due_date'),
  status: varchar('status', { length: 20 }).notNull().default('pending'),
  completedAt: timestamp('completed_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const crisisPlans = pgTable('crisis_plans', {
  id: serial('id').primaryKey(),
  patientId: integer('patient_id').notNull().references(() => patients.id),
  warningSignals: json('warning_signals').$type<string[]>().default([]),
  copingStrategies: json('coping_strategies').$type<string[]>().default([]),
  supportContacts: json('support_contacts').$type<Array<{ name: string; phone: string; relationship: string }>>().default([]),
  professionalContacts: json('professional_contacts').$type<Array<{ name: string; phone: string; role: string }>>().default([]),
  safeEnvironment: text('safe_environment'),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Relations
export const usersRelations = relations(users, ({ one, many }) => ({
  patient: one(patients, {
    fields: [users.id],
    references: [patients.userId],
  }),
  appointmentsAsProvider: many(appointments),
}))

export const patientsRelations = relations(patients, ({ one, many }) => ({
  user: one(users, {
    fields: [patients.userId],
    references: [users.id],
  }),
  assessments: many(assessments),
  appointments: many(appointments),
  progressGoals: many(progressGoals),
  homework: many(homework),
  crisisPlan: one(crisisPlans),
}))

export const assessmentsRelations = relations(assessments, ({ one }) => ({
  patient: one(patients, {
    fields: [assessments.patientId],
    references: [patients.id],
  }),
}))

export const appointmentsRelations = relations(appointments, ({ one, many }) => ({
  patient: one(patients, {
    fields: [appointments.patientId],
    references: [patients.id],
  }),
  provider: one(users, {
    fields: [appointments.providerId],
    references: [users.id],
  }),
  homework: many(homework),
}))