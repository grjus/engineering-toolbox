import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../ToolboxComponents/Card';
import { Title, FormContent, ButtonContainer } from '../../ToolboxComponents/Card/style';
import { FatigueContextDispatch, FatigueContext } from '../context';
import CustomButton from '../../ToolboxComponents/Button/Button';
import { TextBox } from '../../ToolboxComponents/TextBox';
import { nameValRules, descValRules } from '../validators';
import { fatReport } from './Report';

function Summary() {
  const fatigueState = useContext(FatigueContext);
  const fatigueDispatch = useContext(FatigueContextDispatch);

  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      projectName: '',
      description: '',
    },
  });

  const handleBack = () => {
    fatigueDispatch((prev) => ({
      ...prev, activeStep: 3,
    }));
  };

  const generateReport = (data) => {
    const {
      name, surname, projectName, description,
    } = data;
    const { report } = fatigueState;
    const doc = fatReport(name, surname, projectName, description, fatigueState);
    doc.addSummarySection();
    doc.addChart(report.chart, 'Fatigue curve');
    doc.addfatigueTable(report.unit);
    doc.addDocumentLayout();
    doc.saveDoc();
  };

  return (
    <Card>
      <Title>
        Report input data
      </Title>

      <FormContent flex style={{ width: '50%', justifyContent: 'space-between' }}>
        <TextBox name="name" inputRef={register(nameValRules)} label="Name" error={errors.name} fieldType="text" />
        <TextBox name="surname" inputRef={register(nameValRules)} label="Surname" error={errors.surname} fieldType="text" />
      </FormContent>
      <FormContent>
        <TextBox name="projectName" inputRef={register(nameValRules)} label="Project name" error={errors.projectName} fieldType="text" />
      </FormContent>
      <FormContent>
        <TextBox name="description" inputRef={register(descValRules)} label="Additional comments" error={errors.description} multiline fieldType="text" width="380px" />
      </FormContent>
      <ButtonContainer>
        <CustomButton handleClick={handleSubmit(generateReport)} label="Report" buttonType="contained" color="primary" />
        <CustomButton handleClick={handleBack} label="Back" buttonType="contained" color="secondary" />
      </ButtonContainer>

    </Card>
  );
}

export default Summary;
