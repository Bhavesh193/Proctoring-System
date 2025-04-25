import React from 'react';
import TabBlocker from '../../components/TabBlocker';

const ExamLayout = ({ children }) => {
  return (
    <div>
      <TabBlocker />
      {children}
    </div>
  );
};

export default ExamLayout;
