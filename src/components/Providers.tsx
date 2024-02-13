'use client';
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
// const Providers = ({
//   children,
//   user = null,
// }: {
//   children: React.ReactNode;
//   user: any;
// }) => {
//   const { setUser } = useUser();
//   if (user) {
//     setUser(user);
//   }
//   return <>{children}</>;
// };

export default Providers;
