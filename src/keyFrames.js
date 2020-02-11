
import { keyframes } from 'styled-components';
 
export const vWobbler = keyframes`
    0% {transform: translateY(-2px);}
    50% {transform: translateY(2px);}
    100% {transform: translateY(-2px);}
`
export const hWobbler = keyframes`
    0% {transform: translateX(-2px);}
    50% {transform: translateX(2px);}
    100% {transform: translateX(-2px);}
`