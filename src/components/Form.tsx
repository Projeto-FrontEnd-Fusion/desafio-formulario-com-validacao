import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

const Form = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const phoneRegExp = /^\(\d{2}\)\s9?\d{4}-\d{4}$/;

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
            position: '',
            linkedin: '',
            github: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(6, 'Nome completo deve ter no mínimo 6 caracteres')
                .required('Nome completo é obrigatório'),
            email: Yup.string()
                .email('E-mail inválido')
                .required('E-mail é obrigatório'),
            phone: Yup.string()
                .matches(phoneRegExp, 'Número de telefone inválido. Deve conter apenas 9 caracteres Exemplo: (31) 98765-4321')
                .required('Telefone é obrigatório'),
            position: Yup.string()
                .required('Cargo pretendido é obrigatório'),
            linkedin: Yup.string()
                .url('LinkedIn deve ser um link válido'),
            github: Yup.string()
                .url('GitHub deve ser um link válido'),
        }),
        onSubmit: (values) => {
            try {

                localStorage.setItem('values', JSON.stringify(values));
                setSuccessMessage('Cadastro realizado com sucesso!');
                setErrorMessage('');
            } catch (error) {

                setErrorMessage('Falha ao cadastrar. Verifique os dados informados.');
                setSuccessMessage('');
            }
        }
    });

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-3xl  font-bold mb-4">Formulário de Cadastro</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
                    <input
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        type="text"
                        name="fullName"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                    />
                    {formik.errors.fullName && <p className="text-red-500 text-xs">{formik.errors.fullName}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">E-mail</label>
                    <input
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email && <p className="text-red-500 text-xs">{formik.errors.email}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Telefone</label>
                    <InputMask
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        mask="(99) 99999-9999"
                        type="text"
                        name="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                    {formik.errors.phone && <p className="text-red-500 text-xs">{formik.errors.phone}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Cargo Pretendido</label>
                    <select
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        name="position"
                        onChange={formik.handleChange}
                        value={formik.values.position}
                    >
                        <option value="">Selecione o cargo</option>
                        <option value="Desenvolvedor Frontend">Desenvolvedor Frontend</option>
                        <option value="Desenvolvedor Backend">Desenvolvedor Backend</option>
                        <option value="Desenvolvedor Full Stack">Desenvolvedor Full Stack</option>
                        <option value="Desenvolvedor Mobile">Desenvolvedor Mobile</option>
                        <option value="Desenvolvedor de Software">Desenvolvedor de Software</option>
                        <option value="Engenheiro de Software">Engenheiro de Software</option>
                        <option value="Arquiteto de Software">Arquiteto de Software</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Analista de Sistemas">Analista de Sistemas</option>
                        <option value="Analista Programador">Analista Programador</option>
                        <option value="DevOps Engineer">DevOps Engineer</option>
                        <option value="Engenheiro de Dados">Engenheiro de Dados</option>
                        <option value="QA Engineer">QA Engineer</option>
                        <option value="Scrum Master">Scrum Master</option>
                        <option value="Product Owner">Product Owner</option>
                    </select>
                    {formik.errors.position && <p className="text-red-500 text-xs">{formik.errors.position}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">LinkedIn (opcional)</label>
                    <input
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        type="text"
                        name="linkedin"
                        onChange={formik.handleChange}
                        value={formik.values.linkedin}
                    />
                    {formik.errors.linkedin && <p className="text-red-500 text-xs">{formik.errors.linkedin}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">GitHub (opcional)</label>
                    <input
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        type="text"
                        name="github"
                        onChange={formik.handleChange}
                        value={formik.values.github}
                    />
                    {formik.errors.github && <p className="text-red-500 text-xs">{formik.errors.github}</p>}
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">
                    Cadastrar
                </button>


                {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default Form;
