import React from 'react';
import MainContainer from '../../_components/mainContainer/MainContainer';
import ContentTitle from '../../_components/contentTitle/ContentTitle';
import AdminTable from './components/adminTable/AdminTable';

function Admin() {
  return (
    <MainContainer>
      <ContentTitle title="관리자 설정/관리" />
      <AdminTable />
    </MainContainer>
  );
}

export default Admin;
