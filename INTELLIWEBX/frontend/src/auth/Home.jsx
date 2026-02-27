import { Navbar } from '@/components/layout/Navbar';
import { AIChatAssistant } from '@/components/chat/AIChatAssistant';
import { RoleSelector } from '@/components/home/RoleSelector';
import { StudentHome } from '@/components/home/StudentHome';
import { JobSeekerHome } from '@/components/home/JobSeekerHome';
import { ProfessionalHome } from '@/components/home/ProfessionalHome';
import { AdminHome } from '@/components/home/AdminHome';
import { useAuth } from '@/contexts/AuthContext';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const { user, isAuthenticated, setUserRole } = useAuth();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const renderRoleContent = () => {
    if (!user) return null;

    switch (user.role) {
      case 'student':
        return <StudentHome />;
      case 'jobseeker':
        return <JobSeekerHome />;
      case 'professional':
        return <ProfessionalHome />;
      case 'admin':
        return <AdminHome />;
      default:
        return <StudentHome />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {isAuthenticated && user ? (
          <>
            {/* Personalized Greeting */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {getGreeting()}, {user.name}! 👋
              </h1>
              <p className="text-muted-foreground text-lg">
                Here's what's new for you today
              </p>
            </div>

            {/* Role Selector (Demo purposes - allows switching roles) */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">Switch experience mode:</span>
              </div>
              <RoleSelector selectedRole={user.role} onRoleChange={setUserRole} />
            </div>

            {/* Role-specific Content */}
            {renderRoleContent()}
          </>
        ) : (
          /* Landing content for non-authenticated users */
          <div className="text-center py-20 animate-fade-in">
            <div className="mb-8">
              <div className="h-20 w-20 mx-auto rounded-2xl bg-gradient-primary shadow-glow flex items-center justify-center mb-6 animate-float">
                <Sparkles className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">AI-Powered</span> Intelligence
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience personalized recommendations, intelligent insights, and adaptive content designed to accelerate your growth.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* AI Chat Assistant */}
      {isAuthenticated && <AIChatAssistant />}
    </div>
  );
}
