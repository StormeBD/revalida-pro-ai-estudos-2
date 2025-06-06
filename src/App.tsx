import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import { UserProgressProvider } from './contexts/UserProgressContext';
import { SyncProvider } from './contexts/SyncContext';
import { AuthHandler } from './components/AuthHandler';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AdminRoute } from './components/AdminRoute';
import { AdminLayout } from './components/AdminLayout';

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from './pages/Index';
import Auth from './pages/Auth';
import Questoes from './pages/Questoes';
import Simulados from './pages/Simulados';
import SimuladoStart from './pages/SimuladoStart';
import Estatisticas from './pages/Estatisticas';
import Comunidade from "./pages/Comunidade";
import NotFound from "./pages/NotFound";
import IA from "./pages/IA";
import SUS from "./pages/SUS";
import CompleteProfile from "./pages/CompleteProfile";
import ProfilePage from "./pages/Profile";
import { SimuladoReview } from './pages/SimuladoReview';
import RankingPage from './pages/Ranking';
import GuidelineStudy from './pages/GuidelineStudy';

// Páginas Admin
import AdminDashboard from './pages/Admin/Dashboard';
import AdminQuestoes from './pages/Admin/Questoes';
import AdminQuestoesForm from './pages/Admin/Questoes/Form';
import AdminQuestoesImport from './pages/Admin/Questoes/Import';
import AdminAnalytics from './pages/Admin/Analytics';
import AdminUsuarios from './pages/Admin/Usuarios';
import AdminGuidelinesPage from './pages/Admin/Guidelines';
import AdminGuidelineFormPage from './pages/Admin/Guidelines/Form';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <SyncProvider>
            <UserProgressProvider>
              <Router>
                <Routes>
                  {/* O AuthHandler agora envolve todas as rotas */}
                  <Route element={<AuthHandler />}>
                    {/* Rotas Públicas */}
                    <Route path="/auth" element={<Auth />} />

                    {/* Rotas de Perfil */}
                    <Route path="/complete-profile" element={<CompleteProfile />} />

                    {/* Rotas Protegidas */}
                    <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
                    <Route path="/questoes" element={<ProtectedRoute><Questoes /></ProtectedRoute>} />
                    <Route path="/simulados" element={<ProtectedRoute><Simulados /></ProtectedRoute>} />
                    <Route path="/simulado-start" element={<ProtectedRoute><SimuladoStart /></ProtectedRoute>} />
                    <Route path="/simulados/revisar/:activityId" element={<ProtectedRoute><SimuladoReview /></ProtectedRoute>} />
                    <Route path="/estatisticas" element={<ProtectedRoute><Estatisticas /></ProtectedRoute>} />
                    <Route path="/ranking" element={<ProtectedRoute><RankingPage /></ProtectedRoute>} />
                    <Route path="/comunidade" element={<ProtectedRoute><Comunidade /></ProtectedRoute>} />
                    <Route path="/ia" element={<ProtectedRoute><IA /></ProtectedRoute>} />
                    <Route path="/sus" element={<ProtectedRoute><SUS /></ProtectedRoute>} />
                    <Route path="/guideline/:guidelineId" element={<ProtectedRoute><GuidelineStudy /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

                    {/* Rotas de Admin */}
                    <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
                      <Route index element={<AdminDashboard />} />
                      <Route path="questoes" element={<AdminQuestoes />} />
                      <Route path="questoes/nova" element={<AdminQuestoesForm />} />
                      <Route path="questoes/editar/:id" element={<AdminQuestoesForm />} />
                      <Route path="questoes/importar" element={<AdminQuestoesImport />} />
                      <Route path="analytics" element={<AdminAnalytics />} />
                      <Route path="usuarios" element={<AdminUsuarios />} />
                      <Route path="guidelines" element={<AdminGuidelinesPage />} />
                      <Route path="guidelines/new" element={<AdminGuidelineFormPage />} />
                      <Route path="guidelines/edit/:id" element={<AdminGuidelineFormPage />} />
                    </Route>
                    
                    {/* Rota de Not Found */}
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </Router>
              <Toaster />
              <Sonner />
            </UserProgressProvider>
          </SyncProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;