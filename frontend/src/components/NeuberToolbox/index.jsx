import { Card } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../../style';
import { FormContent, Title } from '../ToolboxComponents/Card/style';
import DropDown from '../ToolboxComponents/Dropdown';
import { unitSystemItems } from './config';

const NeuberToolbox = () => {
  const { control } = useForm({
    defaultValues: {
      uniSystem: unitSystemItems[0].value,
    },

  });

  return (
    <Container>
      <Card>
        <Title>Select unit system</Title>
        <FormContent>
          <DropDown name="unitSystem" control={control} dropDownItems={unitSystemItems} />
        </FormContent>
      </Card>
    </Container>
  );
};

export default NeuberToolbox;
