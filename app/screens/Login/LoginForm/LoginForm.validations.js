import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validations
const validations = yup.object({
    username: yup.string().required("Este campo es requerido"),
    password: yup.string().required("Este campo es requerido")
});
const resolver = yupResolver(validations);

export { validations };
export default resolver;