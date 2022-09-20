import { useState } from 'react';
import { api } from '../../service/app';
import imgData from '../../assets/Dona Maria Cupcake.png';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Box, Button, Container } from '@mui/material';
import { Input } from '../input/index';
export const Form = () => {
  const [title, setTitle] = useState('');
  const [income, setIncome] = useState('');
  const [activities, setActivities] = useState('');
  const [benefits, setBenefits] = useState('');
  const [steps, setSteps] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await api().post('/posts/', {
        title,
        income,
        activities,
        benefits,
        steps,
        skills,
        experience,
      });
      const doc = new jsPDF();
      doc.addImage(imgData, 'JPEG', 150, 2, 50, 50);
      autoTable(doc, {
        margin: 30,
        head: [{ html: 'Detalhes da vaga'.toLocaleUpperCase() }],
        theme: 'plain',
        headStyles: {
          fontSize: 24,
          minCellHeight: 50,
          valign: 'middle',
          halign: 'center',
        },
        bodyStyles: { fontSize: 16, minCellHeight: 15, overflow: 'linebreak' },
        body: [
          [`Título: ${res.data.title}`],
          [`Salário: R$ ${res.data.income}`],
          [`Atividades: ${res.data.activities}`],
          [`Benefícios: ${res.data.benefits}`],
          [`Etapas: ${res.data.steps}`],
          [`Habilidades: ${res.data.skills}`],
          [`Experiência: ${res.data.experience}`],
        ],
      });
      doc.save('a4.pdf');
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <Box
      minHeight="85vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <Input
            label="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label="Salário"
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
          <Input
            label="Atividades"
            value={activities}
            onChange={(e) => setActivities(e.target.value)}
          />
          <Input
            label="Benefícios"
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
          />
          <Input
            label="Etapas"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          <Input
            label="Habilidades"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <Input
            label="Experiência"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              background: '#fa8072',
              '&:hover':{
                background: '#fa8072',
                opacity: '80%'
              },
            }}
          >
            Exportar
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
