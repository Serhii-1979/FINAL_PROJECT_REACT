// import React, { useState } from 'react';
// import axios from 'axios';
// import { useTranslation } from 'react-i18next';
// import { TextField, Button, Container, Box } from '@mui/material';

// const DiscountForm = () => {
//   const { t } = useTranslation();

//   // Создаем состояние для хранения данных формы
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: ''
//   });

//   // Обработчик изменения полей формы
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Обработчик отправки формы
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Отправка данных через Axios
//       const response = await axios.post('http://localhost:3333/order/send', formData);
//       console.log('Response:', response.data);
//       // Здесь вы можете добавить логику для обработки успешного ответа, например, показать сообщение пользователю
//     } catch (error) {
//       console.error('Error:', error);
//       // Здесь вы можете добавить логику для обработки ошибок, например, показать сообщение пользователю
//     }
//   };

//   return (
//     <Container maxWidth="xs" sx={{ bgcolor: 'transparent', paddingTop: 6, paddingBottom: 0, borderRadius: 2 }}>
//       <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
//         <TextField
//           required
//           fullWidth
//           id="name"
//           label={t('name')}
//           name="name"
//           autoComplete="name"
//           autoFocus
//           sx={{ bgcolor: 'transparent', borderRadius: 1, mb: 2, input: { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
//           InputLabelProps={{
//             style: { color: 'white' },
//           }}
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <TextField
//           required
//           fullWidth
//           id="phone"
//           label={t('phoneNumber')}
//           name="phone"
//           autoComplete="phone"
//           sx={{ bgcolor: 'transparent', borderRadius: 1, mb: 2, input: { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
//           InputLabelProps={{
//             style: { color: 'white' },
//           }}
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         <TextField
//           required
//           fullWidth
//           id="email"
//           label={t('email')}
//           name="email"
//           autoComplete="email"
//           sx={{ bgcolor: 'transparent', borderRadius: 1, mb: 2, input: { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
//           InputLabelProps={{
//             style: { color: 'white' },
//           }}
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{
//             padding: 1.5,
//             bgcolor: 'white',
//             color: 'black',
//             width: '100%',
//           }}
//         >
//           {t('getDiscount')}
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default DiscountForm;
