import React, { FC } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import PaymentInformationChip, { ChipType } from './PaymentInformationChip';

type PendingPaymentProps = {
  paymentPlanId: number;
  pendingPaymentList: ChipType[];
  pendingAmount: string;
  financingAmount: string;
  onClickCreatePayment?: (paymentPlanId: number) => void;
};

const PendingPayment: FC<PendingPaymentProps> = ({
  paymentPlanId,
  pendingPaymentList,
  pendingAmount,
  financingAmount,
  onClickCreatePayment,
}) => {
  return (
    <>
      <Divider sx={{ width: '250px', marginY: '35px' }} />
      <Typography fontSize={'16px'} fontWeight={500}>
        Total Pagos Pendiente (Inicial): {pendingAmount}
      </Typography>
      <Box my={'32px'} display="flex" columnGap={'44px'}>
        <Button
          sx={{
            fontWeight: 400,
            backgroundColor: '#F3EAFF',
            '&:hover': { backgroundColor: '#E4D1FF' },
          }}
        >
          Crear Reventa
        </Button>
        {parseFloat(pendingAmount.replaceAll(/[US$,]/gi, '')) > 0 ? (
          <Button
            sx={{
              backgroundColor: '#F3F3F3',
              '&:hover': { backgroundColor: '#E6E6E6' },
            }}
            onClick={() => onClickCreatePayment?.(paymentPlanId)}
          >
            Nuevo Pago
          </Button>
        ) : null}
      </Box>
      <Box display={'flex'} rowGap={'25px'} flexDirection={'column'}>
        {pendingPaymentList.map((payment) => (
          <PaymentInformationChip key={payment.id}>
            {payment.content}
          </PaymentInformationChip>
        ))}
      </Box>
      <Button
        sx={{
          mt: '49px',
          backgroundColor: '#FFF1E6',
          '&:hover': { backgroundColor: '#FFE3CD' },
        }}
      >
        Pasar a Financamiento ({financingAmount})
      </Button>
    </>
  );
};

export default PendingPayment;
