import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled(motion.div)`
  background: #1e1e1e;
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  border-radius: 8px;
  color: white;
  text-align: center;
`;

function AnimatedSection({ children }) {
  return (
    <Section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </Section>
  );
}

export default AnimatedSection;
