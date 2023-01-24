import React, { FC } from "react";
import Preloader from "@/components/Preloader";
import ErrorMessage from "@/components/ErrorMessage";

interface ILayout {
  loading: boolean;
  error: boolean;
  children: JSX.Element;
  refreshClick: () => void;
}

const Layout: FC<ILayout> = ({
  loading,
  error,
  children,
  refreshClick,
}: ILayout): JSX.Element => {
  if (loading) return <Preloader />;
  if (error) return <ErrorMessage refreshClick={refreshClick} />;
  return children;
};

export default Layout;
