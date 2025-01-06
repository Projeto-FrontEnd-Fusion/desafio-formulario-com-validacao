import React from "react";
import { Form, Input, Select, Button, Upload } from "antd";
import { useDispatch } from "react-redux";
import { addMember } from "../../Redux/Slices/memberSlice";
import { UploadOutlined } from "@ant-design/icons";
import * as Yup from "yup";
import { notification } from "antd";
// IMPORT CSS
import "./Form.css";

const { Option } = Select;

// Definir o esquema de validação com Yup
const validationSchema = Yup.object({
  nome: Yup.string().required("Por favor, insira seu nome completo!"),
  email: Yup.string()
    .email("Por favor, insira um e-mail válido!")
    .required("Por favor, insira seu e-mail!"),
  telefone: Yup.string()
    .matches(
      /^[0-9]{2}[9]{1}[0-9]{8}$/,
      "Por favor, insira um telefone válido (formato: XX9XXXXXXXX)"
    )
    .required("Por favor, insira seu telefone!"),
  cargo: Yup.string().required("Por favor, selecione um cargo!"),
  linkedin: Yup.string()
    .url("Por favor, insira uma URL válida para o LinkedIn!")
    .optional(),
  github: Yup.string()
    .url("Por favor, insira uma URL válida para o GitHub!")
    .optional(),
});

const MemberForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  // Função para enviar o formulário
  const handleSubmit = (values) => {
    try {
      // Recupera os membros já cadastrados
      const existingMembers = JSON.parse(localStorage.getItem("members") || "[]");
  
      // Verifica se já existe um membro com o mesmo e-mail ou telefone
      const duplicateMember = existingMembers.find(
        (member) => member.email === values.email || member.telefone === values.telefone
      );
  
      if (duplicateMember) {
        // Exibe mensagem de erro caso o membro já exista
        notification.error({
          message: "Erro!",
          description: "Já existe um membro cadastrado com este e-mail ou telefone.",
          placement: "topRight",
        });
        return;
      }
  
      // Adiciona o novo membro
      existingMembers.push(values);
      localStorage.setItem("members", JSON.stringify(existingMembers));
  
      // Salva os dados no Redux
      dispatch(addMember(values));
  
      // Exibe mensagem de sucesso
      notification.success({
        message: "Sucesso!",
        description: "Cadastro realizado com sucesso!",
        placement: "topRight",
      });
  
      // Reseta o formulário
      form.resetFields();
    } catch (error) {
      // Exibe mensagem de erro em caso de falha
      notification.error({
        message: "Erro!",
        description: "Falha ao cadastrar. Verifique os dados informados.",
        placement: "topRight",
      });
    }
  };

  const handleFileChange = (info: any) => {
    console.log("File uploaded:", info.file);
  };

  return (
    <>
      <section className="container_form">
        <div className="container_perfil">
          <div className="img_perfil">
            <img src="/img/perfil-user.webp" alt="" />
            <Upload className="up"
              name="file"
              onChange={handleFileChange}
              showUploadList={false} // Para ocultar a lista de arquivos
            >
              <Button className="btn_file" icon={<UploadOutlined />}>
                Upload de Arquivo
              </Button>
            </Upload>
          </div>
          <div className="text_area_perfil">
            <h4>Breve descrição:</h4>
            <textarea name="" id=""></textarea>
          </div>
        </div>

        <h1 className="title_perfil_form">Cadastro de Membro</h1>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
          className="form_user"
          validateMessages={{ required: "${label} é obrigatório!" }}
        >
          <Form.Item
            label="Nome Completo"
            name="nome"
            rules={[
              {
                required: true,
                message: "Por favor, insira seu nome completo!",
              },
            ]}
          >
            <Input placeholder="Digite seu nome completo" />
          </Form.Item>

          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              { required: true, message: "Por favor, insira seu e-mail!" },
              {
                type: "email",
                message: "Por favor, insira um e-mail válido!",
              },
            ]}
          >
            <Input placeholder="Digite seu e-mail" />
          </Form.Item>

          <Form.Item
            label="Telefone"
            name="telefone"
            rules={[
              { required: true, message: "Por favor, insira seu telefone!" },
              {
                pattern: /^[0-9]{2}[9]{1}[0-9]{8}$/,
                message:
                  "Por favor, insira um telefone válido (formato: XX9XXXXXXXX)",
              },
            ]}
          >
            <Input placeholder="Digite seu telefone" />
          </Form.Item>

          <Form.Item
            label="Cargo Pretendido"
            name="cargo"
            rules={[
              { required: true, message: "Por favor, selecione um cargo!" },
            ]}
          >
            <Select placeholder="Selecione um cargo">
              <Option value="frontend">Desenvolvedor Frontend</Option>
              <Option value="backend">Desenvolvedor Backend</Option>
              <Option value="fullstack">Desenvolvedor Full Stack</Option>
              <Option value="mobile">Desenvolvedor Mobile</Option>
              <Option value="software">Desenvolvedor de Software</Option>
              <Option value="engenheiro-software">
                Engenheiro de Software
              </Option>
              <Option value="arquiteto-software">Arquiteto de Software</Option>
              <Option value="ui-ux-designer">UI/UX Designer</Option>
              <Option value="analista-sistemas">Analista de Sistemas</Option>
              <Option value="analista-programador">Analista Programador</Option>
              <Option value="devops">DevOps Engineer</Option>
              <Option value="engenheiro-dados">Engenheiro de Dados</Option>
              <Option value="qa-engineer">QA Engineer</Option>
              <Option value="scrum-master">Scrum Master</Option>
              <Option value="product-owner">Product Owner</Option>
            </Select>
          </Form.Item>

          <Form.Item label="LinkedIn" name="linkedin">
            <Input placeholder="Digite seu perfil do LinkedIn (opcional)" />
          </Form.Item>

          <Form.Item label="GitHub" name="github">
            <Input placeholder="Digite seu perfil do GitHub (opcional)" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </section>
    </>
  );
};

export default MemberForm;
