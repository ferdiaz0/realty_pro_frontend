'use client';
import { Box } from '@mui/material';
import { useParams } from 'next/navigation';
import React from 'react';
import SidebarContactInformation from './components/SidebarContactInformation';
import HeaderPage from '../../components/shared/HeaderPage';
import ProjectTab from '../../project/components/ProjectTab';
import useContactProfilePage from './usePage';

const ContactProfile = () => {
  const useContactProfilePageProps = useContactProfilePage();
  const { slug } = useParams();
  console.log({ slug });

  const userSections = [
    {
      label: 'Ventas',
      id: 'sales',
      component: <>Ventas</>,
    },
    {
      label: 'Finalizado',
      id: 'ends',
      component: <>Finalizado</>,
    },
  ];

  return (
    <Box display={'flex'} flexDirection={'row'}>
      <Box
        sx={{
          maxWidth: '338px',
          width: '100%',
          borderRight: '1px solid #E7E7E7',
        }}
      >
        <SidebarContactInformation />
      </Box>
      <Box sx={{ width: '100%' }}>
        <HeaderPage
          name="Planes de Pago"
          extraContent={
            <ProjectTab
              currentTabValue={useContactProfilePageProps.currentTabValue}
              handleChange={useContactProfilePageProps.handleChangeTab}
              tabArray={userSections}
            />
          }
        />
        <Box sx={{ padding: '40px' }}>
          {userSections[useContactProfilePageProps.currentTabValue].component}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactProfile;
