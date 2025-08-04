# AI-Powered Mental Health Patient Portal - Comprehensive Build Prompt

## Role & Mission Critical Context
You are an elite React/Next.js developer specializing in healthcare AI applications with a specific mission: Build a patient portal that WINS SALES DEMOS by showcasing AI-powered administrative automation while creating genuine patient delight. Every feature must serve dual purposes: patient engagement AND provider value demonstration.

## Business Context - This Is About Closing Sales
<sales_mission>
  <primary_goal>Create a patient portal that demonstrates AI-powered EHR capabilities during 45-50 minute sales demos to mental health providers</primary_goal>
  <target_audience>Psychiatrists, Psychologists, Licensed Therapists who spend 20-30 minutes per session on admin work</target_audience>
  <value_proposition>Reduce provider admin time from 20-30 minutes to 2 minutes per session while improving patient engagement</value_proposition>
  <demo_phases>
    <phase_1>Pre-Session Workflow Demo (5-7 min) - Show automated patient outreach and prep</phase_1>
    <phase_2>Live Session Demo (15-20 min) - Patient portal feeds real-time data to provider dashboard</phase_2>
    <phase_3>Post-Session Magic (10-12 min) - AI processes patient data into SOAP notes</phase_3>
    <phase_4>Patient Experience (5 min) - Showcase portal engagement and progress tracking</phase_4>
  </demo_phases>
  <wow_moments>
    <moment>Patient completes PHQ-9 assessment, scores auto-calculate with risk flags visible to provider instantly</moment>
    <moment>Progress visualization shows 8-week depression score improvement trend</moment>
    <moment>Pre-session preparation automatically creates provider dashboard with all relevant patient context</moment>
  </wow_moments>
</sales_mission>

## Technical Architecture - Production Ready
<tech_stack>
  <framework>Next.js 15.3.0-canary.31 with App Router (bleeding edge performance)</framework>
  <language>TypeScript 5.6.3 with strict mode for enterprise reliability</language>
  <styling>Tailwind CSS 3.4.1 + Radix UI (consistent, accessible components)</styling>
  <animations>Framer Motion 11.3.19 (smooth micro-interactions that feel premium)</animations>
  <forms>React Hook Form 7.60.0 + Zod validation (bulletproof assessment handling)</forms>
  <auth>NextAuth.js 5.0.0-beta.25 (HIPAA-compliant session management)</auth>
  <database>PostgreSQL + Drizzle ORM 0.34.0 (type-safe, performant)</database>
  <state>Zustand + React Query (optimistic updates, offline support)</state>
  <monitoring>Vercel Analytics + error boundaries (demo-critical reliability)</monitoring>
  <performance_targets>
    <target>First Contentful Paint < 1.2s</target>
    <target>Largest Contentful Paint < 2.5s</target>
    <target>Offline assessment completion capability</target>
    <target>PWA installation prompt for app-like experience</target>
  </performance_targets>
</tech_stack>

## Visual Design - Therapeutic Yet Professional
<design_system>
  <color_palette>
    <primary>Calming Blue (#4F46E5) - trust, professionalism</primary>
    <secondary>Warm Gray (#6B7280) - neutral, accessible</secondary>
    <success>Gentle Green (#10B981) - progress, growth</success>
    <warning>Soft Orange (#F59E0B) - attention without alarm</warning>
    <error>Muted Red (#EF4444) - clear but not harsh</error>
    <backgrounds>Gradient from blue-50 to slate-50 for depth</backgrounds>
  </color_palette>
  
  <typography>
    <primary_font>Geist (modern, readable, professional)</primary_font>
    <heading_hierarchy>text-2xl, text-xl, text-lg with proper line-height</heading_hierarchy>
    <body_text>text-base with 1.6 line-height for readability</body_text>
    <micro_text>text-sm for metadata, labels</micro_text>
  </typography>
  
  <spacing_system>
    <consistent_spacing>4px base unit (p-1, p-2, p-4, p-6, p-8)</consistent_spacing>
    <card_padding>p-6 for content, p-4 for mobile</card_padding>
    <section_margins>mb-8 between major sections</section_margins>
    <grid_gaps>gap-4 for cards, gap-6 for major sections</grid_gaps>
  </spacing_system>
  
  <component_patterns>
    <cards>rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow</cards>
    <buttons>rounded-md px-4 py-2 font-medium transition-colors with proper focus states</buttons>
    <inputs>rounded border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500</inputs>
    <progress_bars>rounded-full bg-gray-200 with animated blue fill</progress_bars>
  </component_patterns>
</design_system>

## Patient Emotional Journey Mapping
<patient_experience>
  <first_login>
    <emotion>Nervous, uncertain about technology</emotion>
    <ui_response>Welcome video, clear onboarding, immediate success with simple first task</ui_response>
    <provider_value>Reduces no-shows through successful patient engagement</provider_value>
  </first_login>
  
  <assessment_completion>
    <emotion>Vulnerable, wanting privacy and understanding</emotion>
    <ui_response>One question per screen, gentle progress indicators, auto-save, encouraging language</ui_response>
    <provider_value>Higher completion rates mean better clinical data for providers</provider_value>
  </assessment_completion>
  
  <progress_review>
    <emotion>Hopeful, seeking validation of improvement</emotion>
    <ui_response>Visual progress charts, celebration of milestones, gentle explanation of setbacks</ui_response>
    <provider_value>Engaged patients are more compliant and have better outcomes</provider_value>
  </progress_review>
  
  <crisis_moments>
    <emotion>Distressed, need immediate support information</emotion>
    <ui_response>Crisis resources always accessible, warm colors, immediate provider notification capability</ui_response>
    <provider_value>Automated risk flagging protects providers and patients</provider_value>
  </crisis_moments>
</patient_experience>

## Core Features - Demo-Optimized Implementation
<priority_features>
  <feature_1>
    <name>Assessment Completion Engine</name>
    <demo_impact>Live demonstration of patient completing PHQ-9 with real-time provider visibility</demo_impact>
    <patient_value>Feels like thoughtful conversation, not clinical interrogation</patient_value>
    <provider_value>Automatic scoring, risk flagging, progress tracking</provider_value>
    <implementation>
      <component>AssessmentFlow - Wizard-style multi-step form with animations</component>
      <component>QuestionCard - Large, clear question with visual answer options</component>
      <component>ProgressIndicator - Shows completion % with encouraging messages</component>
      <component>AutoSave - Saves every answer immediately with visual confirmation</component>
      <component>RiskDetection - Automatic flagging for scores above clinical thresholds</component>
    </implementation>
    <code_example>
      const PHQ9Assessment = () => {
        const [currentQuestion, setCurrentQuestion] = useState(0)
        const [answers, setAnswers] = useState({})
        const [riskFlags, setRiskFlags] = useState([])
        
        return (
          <motion.div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
            <AssessmentHeader 
              title="Depression Screening (PHQ-9)"
              progress={(currentQuestion / 9) * 100}
              encouragement="You're doing great. This helps your provider understand how to best support you."
            />
            <QuestionCard 
              question={PHQ9_QUESTIONS[currentQuestion]}
              onAnswer={(value) => handleAnswer(currentQuestion, value)}
              showRiskSupport={riskFlags.includes(currentQuestion)}
            />
            <NavigationButtons 
              onNext={() => setCurrentQuestion(prev => prev + 1)}
              onPrevious={() => setCurrentQuestion(prev => prev - 1)}
              canProceed={!!answers[currentQuestion]}
            />
          </motion.div>
        )
      }
    </code_example>
  </feature_1>

  <feature_2>
    <name>AI-Powered Dashboard</name>
    <demo_impact>Shows patient's complete clinical picture generated automatically</demo_impact>
    <patient_value>Sees their progress and feels heard by their provider</patient_value>
    <provider_value>Everything they need for the session in one view</provider_value>
    <implementation>
      <component>WelcomeCard - Personalized greeting with next appointment countdown</component>
      <component>AssessmentSummary - Recent scores with trend indicators</component>
      <component>ProgressVisualization - Charts showing improvement over time</component>
      <component>ActionItems - Pending assessments and homework</component>
      <component>CrisisResources - Always visible support information</component>
    </implementation>
    <code_example>
      const PatientDashboard = () => {
        const { patient, assessments, appointments } = usePatientData()
        
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
            <PatientHeader name={patient.name} nextAppointment={appointments.next} />
            
            <div className="p-6 space-y-6">
              <WelcomeCard 
                greeting={`Good ${getTimeOfDay()}, ${patient.firstName}`}
                nextSession={appointments.next}
                encouragement="You've completed 3 assessments this week - great progress!"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RecentAssessments 
                  phq9={assessments.latest.phq9}
                  gad7={assessments.latest.gad7}
                  showTrends={true}
                />
                <ProgressChart 
                  data={assessments.history}
                  timeframe="8weeks"
                  showMilestones={true}
                />
              </div>
              
              <ActionItemsCard 
                pendingAssessments={assessments.pending}
                homework={patient.homework}
                urgency="medium"
              />
            </div>
          </div>
        )
      }
    </code_example>
  </feature_2>

  <feature_3>
    <name>Progress Visualization Engine</name>
    <demo_impact>Dramatic before/after progress charts that wow providers</demo_impact>
    <patient_value>Visual proof of improvement increases motivation</patient_value>
    <provider_value>Easy outcome demonstration for insurance and treatment planning</provider_value>
    <implementation>
      <component>TrendChart - Line charts with annotations for significant events</component>
      <component>MilestoneCard - Celebration of treatment goals achieved</component>
      <component>ComparisonView - Before/after assessment scores</component>
      <component>GoalTracker - Visual progress toward treatment objectives</component>
    </implementation>
    <code_example>
      const ProgressVisualization = ({ patientId, timeframe = '12weeks' }) => {
        const { progressData, milestones, goals } = useProgressData(patientId, timeframe)
        
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Your Progress Journey</h3>
              <TimeframeSelector value={timeframe} onChange={setTimeframe} />
            </div>
            
            <div className="space-y-6">
              <TrendChart 
                data={progressData}
                metrics={['phq9', 'gad7']}
                annotations={milestones}
                showImprovement={true}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {goals.map(goal => (
                  <GoalProgressCard 
                    key={goal.id}
                    title={goal.title}
                    progress={goal.progress}
                    target={goal.target}
                    celebration={goal.completed}
                  />
                ))}
              </div>
              
              <ImprovementSummary 
                startingScore={progressData[0]?.phq9}
                currentScore={progressData[progressData.length - 1]?.phq9}
                percentImprovement={calculateImprovement(progressData)}
              />
            </div>
          </div>
        )
      }
    </code_example>
  </feature_3>

  <feature_4>
    <name>Pre-Session Intelligent Workflow</name>
    <demo_impact>Shows completely automated patient preparation</demo_impact>
    <patient_value>Feels prepared and supported before each session</patient_value>
    <provider_value>Patients arrive ready with all necessary data collected</provider_value>
    <implementation>
      <component>SessionPrepCard - Checklist of pre-session tasks</component>
      <component>AssessmentReminder - Gentle nudges with progress tracking</component>
      <component>HomeworkUpload - Document and journal submission</component>
      <component>MoodCheck - Quick daily mood tracking</component>
    </implementation>
  </feature_4>

  <feature_5>
    <name>Crisis Support & Safety Planning</name>
    <demo_impact>Shows duty of care and risk management capabilities</demo_impact>
    <patient_value>Always has access to help when needed</patient_value>
    <provider_value>Automated risk detection and documentation</provider_value>
    <implementation>
      <component>CrisisButton - Always visible emergency support access</component>
      <component>SafetyPlan - Personalized coping strategies</component>
      <component>RiskAssessment - Automatic flagging based on responses</component>
      <component>ProviderAlert - Immediate notification system</component>
    </implementation>
  </feature_5>
</priority_features>

## Mock Data Strategy - Impressive Demo Scenarios
<demo_data>
  <patient_profile>
    <name>Sarah Chen</name>
    <age>34</age>
    <condition>Generalized Anxiety Disorder with mild depression</condition>
    <treatment_duration>12 weeks</treatment_duration>
    <engagement_level>High (completes 95% of assessments)</engagement_level>
  </patient_profile>
  
  <progress_narrative>
    <week_1>PHQ-9: 14 (moderate depression), GAD-7: 16 (severe anxiety)</week_1>
    <week_6>PHQ-9: 9 (mild depression), GAD-7: 11 (moderate anxiety)</week_6>
    <week_12>PHQ-9: 4 (minimal depression), GAD-7: 6 (mild anxiety)</week_12>
    <key_events>
      <event>Week 3: Started medication, temporary score increase</event>
      <event>Week 7: Completed CBT module, significant improvement</event>
      <event>Week 10: Achieved treatment goal of PHQ-9 < 5</event>
    </key_events>
  </progress_narrative>
  
  <assessment_responses>
    <phq9_latest>
      <q1_little_interest>1</q1_little_interest>
      <q2_feeling_down>0</q2_feeling_down>
      <q3_sleep_trouble>2</q3_sleep_trouble>
      <q4_feeling_tired>1</q4_feeling_tired>
      <q5_poor_appetite>0</q5_poor_appetite>
      <q6_feeling_bad>0</q6_feeling_bad>
      <q7_trouble_concentrating>0</q7_trouble_concentrating>
      <q8_moving_slowly>0</q8_moving_slowly>
      <q9_thoughts_death>0</q9_thoughts_death>
      <total_score>4</total_score>
      <severity>Minimal Depression</severity>
      <risk_level>Low</risk_level>
    </phq9_latest>
  </assessment_responses>
</demo_data>

## Component Architecture - Enterprise Grade
<component_structure>
  <app_shell>
    <component>AppLayout - Main container with navigation and error boundaries</component>
    <component>PatientHeader - User info, notifications, crisis button</component>
    <component>BottomNavigation - Primary navigation with active states</component>
    <component>LoadingFallback - Skeleton screens for all major views</component>
    <component>ErrorBoundary - Graceful error handling with recovery options</component>
  </app_shell>
  
  <assessment_system>
    <component>AssessmentEngine - Core logic for question flow and scoring</component>
    <component>QuestionRenderer - Adaptive UI for different question types</component>
    <component>ResponseValidator - Real-time validation with helpful messages</component>
    <component>ProgressTracker - Visual progress with motivational messaging</component>
    <component>RiskAnalyzer - Automatic risk detection and flagging</component>
  </assessment_system>
  
  <data_visualization>
    <component>ProgressChart - Recharts-based trend visualization</component>
    <component>ScoreCard - Individual assessment result display</component>
    <component>TrendIndicator - Visual improvement/decline indicators</component>
    <component>MilestoneMarker - Treatment goal achievement display</component>
    <component>ComparisonWidget - Before/after score comparisons</component>
  </data_visualization>
  
  <interaction_components>
    <component>AnimatedButton - Micro-interactions for all CTAs</component>
    <component>ProgressIndicator - Smooth progress animations</component>
    <component>SuccessConfirmation - Celebration animations for completions</component>
    <component>LoadingSpinner - Consistent loading states</component>
    <component>TransitionWrapper - Page transition animations</component>
  </interaction_components>
</component_structure>

## State Management - Optimized for Demo Performance
<state_architecture>
  <global_state_zustand>
    <store>PatientStore - Core patient data and session info</store>
    <store>AssessmentStore - Assessment state and responses</store>
    <store>UIStore - Loading states, modals, notifications</store>
    <store>AuthStore - Authentication and session management</store>
  </global_state_zustand>
  
  <server_state_react_query>
    <query>usePatientData - Patient profile and settings</query>
    <query>useAssessments - Assessment history and results</query>
    <query>useAppointments - Upcoming and past appointments</query>
    <query>useProgress - Progress tracking and goals</query>
    <mutation>submitAssessment - Optimistic updates for responses</mutation>
  </server_state_react_query>
  
  <form_state_rhf>
    <form>AssessmentForm - Multi-step assessment handling</form>
    <form>ProfileForm - Patient profile updates</form>
    <form>HomeworkForm - Assignment submissions</form>
    <validation>Zod schemas for all data validation</validation>
  </form_state_rhf>
</state_architecture>

## API Integration - EHR Backend Ready
<api_specifications>
  <endpoints>
    <endpoint>GET /api/patient/profile - Patient demographic and clinical data</endpoint>
    <endpoint>GET /api/assessments/history - Complete assessment history with scores</endpoint>
    <endpoint>POST /api/assessments/submit - Submit new assessment responses</endpoint>
    <endpoint>GET /api/appointments/upcoming - Next appointments with preparation tasks</endpoint>
    <endpoint>GET /api/progress/summary - Progress tracking and goal status</endpoint>
    <endpoint>GET /api/crisis/resources - Crisis support information and contacts</endpoint>
    <endpoint>POST /api/alerts/risk - Automatic risk flag notifications</endpoint>
  </endpoints>
  
  <authentication>
    <method>NextAuth.js with JWT tokens</method>
    <security>HIPAA-compliant session management</security>
    <timeout>30-minute sessions with activity extension</timeout>
    <mfa>Support for 2FA when required by practice</mfa>
  </authentication>
  
  <data_sync>
    <strategy>Optimistic updates with conflict resolution</strategy>
    <offline>Assessment completion works offline</offline>
    <sync>Background sync when connection restored</sync>
    <validation>Server-side validation mirrors client validation</validation>
  </data_sync>
</api_specifications>

## Quality Assurance - Demo-Critical Standards
<quality_requirements>
  <performance_benchmarks>
    <metric>Initial page load < 1.2s on 3G connection</metric>
    <metric>Assessment question transitions < 200ms</metric>
    <metric>Chart rendering < 500ms for 12 weeks of data</metric>
    <metric>Form submission feedback < 100ms</metric>
    <metric>Offline assessment completion support</metric>
  </performance_benchmarks>
  
  <accessibility_compliance>
    <standard>WCAG 2.1 AA compliance with automated testing</standard>
    <screen_readers>Full VoiceOver and NVDA compatibility</screen_readers>
    <keyboard_nav>All functionality accessible via keyboard</keyboard_nav>
    <color_contrast>4.5:1 minimum contrast ratio</color_contrast>
    <focus_management>Clear focus indicators and logical tab order</focus_management>
  </accessibility_compliance>
  
  <security_requirements>
    <hipaa>HIPAA-compliant data handling and transmission</hipaa>
    <encryption>TLS 1.3 for all data transmission</encryption>
    <storage>No sensitive data in localStorage or sessionStorage</storage>
    <sessions>Secure session management with automatic timeout</sessions>
    <audit>Activity logging for compliance requirements</audit>
  </security_requirements>
  
  <testing_strategy>
    <unit>Jest + Testing Library for component testing</unit>
    <integration>Playwright for full user journey testing</integration>
    <accessibility>axe-core automated accessibility testing</accessibility>
    <performance>Lighthouse CI for performance monitoring</performance>
    <visual>Chromatic for visual regression testing</visual>
  </testing_strategy>
</quality_requirements>

## Deployment & Demo Infrastructure
<deployment_requirements>
  <hosting>
    <platform>Vercel Pro for enterprise reliability</platform>
    <regions>Multi-region deployment for global demos</regions>
    <performance>Edge runtime for optimal performance</performance>
    <monitoring>Real-time error tracking and performance monitoring</monitoring>
  </hosting>
  
  <demo_environment>
    <url>demo.yourdomain.com with custom branding</url>
    <data>Pre-loaded with impressive patient journey data</data>
    <reset>Automated demo reset between sales calls</reset>
    <analytics>Demo interaction tracking for sales insights</analytics>
  </demo_environment>
  
  <ci_cd>
    <pipeline>GitHub Actions with automated testing</pipeline>
    <preview>Automatic preview deployments for each PR</pipeline>
    <staging>Staging environment for demo rehearsal</staging>
    <production>Production deployment with rollback capability</production>
  </ci_cd>
</deployment_requirements>

## Success Metrics & Validation
<success_criteria>
  <technical_success>
    <metric>Lighthouse score 95+ for Performance, Accessibility, Best Practices</metric>
    <metric>Zero console errors or warnings in production</metric>
    <metric>Sub-second page load times on mobile devices</metric>
    <metric>100% uptime during scheduled demo periods</metric>
  </technical_success>
  
  <demo_success>
    <metric>Providers can complete full patient assessment flow in under 3 minutes</metric>
    <metric>Progress visualization generates "wow" reactions from prospects</metric>
    <metric>Crisis support features demonstrate duty of care compliance</metric>
    <metric>Mobile experience rivals native healthcare apps</metric>
  </demo_success>
  
  <patient_experience>
    <metric>Assessment completion rate > 90% based on UI flow</metric>
    <metric>Progress tracking motivates continued engagement</metric>
    <metric>Crisis resources always accessible within 2 taps</metric>
    <metric>Overall experience feels supportive, not clinical</metric>
  </patient_experience>
  
  <provider_value_demo>
    <metric>Clear demonstration of 20-minute admin time savings</metric>
    <metric>Automatic risk flagging showcases patient safety features</metric>
    <metric>Progress visualization supports outcome-based care</metric>
    <metric>Integration readiness evident through API structure</metric>
  </provider_value_demo>
</success_criteria>

## Final Output Requirements
<deliverables>
  <complete_application>
    <requirement>Fully functional Next.js application with all specified features</requirement>
    <requirement>Mobile-first responsive design tested on iOS and Android</requirement>
    <requirement>Type-safe TypeScript implementation with comprehensive interfaces</requirement>
    <requirement>Accessible components with proper ARIA attributes and keyboard navigation</requirement>
    <requirement>Integration-ready API endpoints using realistic mock data</requirement>
    <requirement>Comprehensive error boundaries and loading states</requirement>
    <requirement>Production-ready deployment configuration for Vercel</requirement>
  </complete_application>
  
  <demo_package>
    <requirement>Pre-loaded demo data showing impressive patient journey</requirement>
    <requirement>Demo reset functionality for multiple sales presentations</requirement>
    <requirement>Sales talking points documentation for each feature</requirement>
    <requirement>Provider value proposition clearly demonstrated</requirement>
  </demo_package>
  
  <documentation>
    <requirement>Component documentation with Storybook</requirement>
    <requirement>API documentation with example requests/responses</requirement>
    <requirement>Deployment guide for staging and production</requirement>
    <requirement>Demo preparation checklist for sales team</requirement>
  </documentation>
</deliverables>

## Mission Critical Success Statement
This patient portal must demonstrate that AI can transform mental health practice management while creating genuinely delightful patient experiences. Every interaction should reinforce the value proposition: providers save hours of administrative work while patients feel more engaged and supported in their mental health journey. The portal should feel like having a dedicated care coordinator who never sleeps, never forgets, and always puts patient wellbeing first.