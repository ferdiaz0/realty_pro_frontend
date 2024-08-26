import React, { FC } from 'react';
import PaymentAccordion from './PaymentAccordion';
import { Box, CircularProgress, Grid } from '@mui/material';
import { GetContactPaymentPlanDto } from '@/common/dto';
import { UseQueryResult } from '@tanstack/react-query';

const SaleTab: FC<{
  paymentPlan: UseQueryResult<GetContactPaymentPlanDto[], Error>;
}> = ({ paymentPlan }) => {
  return (
    <Box display={'flex'} rowGap={'40px'} flexDirection={'column'}>
      {paymentPlan.isLoading ? (
        <Grid justifyContent={'center'} item xs={12}>
          <CircularProgress sx={{ color: '#000' }} />
        </Grid>
      ) : (
        <>
          {paymentPlan.data?.map((plan) => (
            <PaymentAccordion
              key={plan.payment_plan_id}
              plan={plan}
              hasPendingPayments
              bgColor="warning"
            />
          ))}
        </>
      )}
    </Box>
  );
};

export default SaleTab;
