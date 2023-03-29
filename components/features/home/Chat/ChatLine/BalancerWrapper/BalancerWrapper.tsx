import Balancer from "react-wrap-balancer";
import { ReactNode } from "react";

interface IBalancerProps {
  children: ReactNode;
}

export const BalancerWrapper = ({ children }: IBalancerProps) => {
  return <Balancer>{children}</Balancer>;
};
