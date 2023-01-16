import "./style.css";
import { motion, Variants } from "framer-motion";

interface Props {
    children?: JSX.Element;
}
const Hover = ({ children }: Props) => {
    return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }} >
            {children}
        </motion.div>
    );
}

export default Hover;
