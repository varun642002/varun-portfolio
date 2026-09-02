import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "@/components/layout/Nav";
import { SignalTrace } from "@/components/layout/SignalTrace";
import { Cursor } from "@/components/layout/Cursor";
import { Home } from "@/pages/Home";
import { WorkDetail } from "@/pages/WorkDetail";
import { NotFound } from "@/pages/NotFound";
import { useReducedMotion } from "@/lib/useReducedMotion";

function PageTransition({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <SignalTrace />
      <Cursor />
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/work/:slug"
            element={
              <PageTransition>
                <WorkDetail />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
