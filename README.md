# 📝 Terceiro Desafio: Formulário de Cadastro de Membros  
**Processo Seletivo Frontend Fusion - [Vaga Voluntária]**

Este projeto é um formulário de cadastro desenvolvido com **React**, voltado para o **Desafio Frontend Fusion**. O objetivo é proporcionar uma experiência simples e intuitiva para que os usuários possam se cadastrar no desafio. Os dados dos formulários são validados e armazenados no **Local Storage**, garantindo funcionalidade e usabilidade.   

![Descrição da Imagem](https://drive.google.com/uc?export=view&id=1ao43pD7Z1FUjYaD7UShw1N1pPp42pGqk)


👉 **Confira o deploy:** [https://desafio-frontend-fusion.netlify.app/](https://desafio-frontend-fusion.netlify.app/)  

---

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.  
- **Vite**: Ferramenta de bundling e servidor de desenvolvimento.  
- **TailwindCSS**: Framework CSS para estilização rápida e responsiva.  
- **Ant Design**: Biblioteca de componentes de UI para construção do formulário.  
- **Redux Toolkit**: Gerenciamento de estado da aplicação.  
- **Yup**: Biblioteca de validação para garantir dados consistentes no formulário.  
- **Chart.js** (não utilizado diretamente): Dependência para gráficos e visualizações.  

---

![Imagem do Projeto](https://drive.google.com/uc?export=view&id=15xwf9gz7UfwLabbcxpVQC5Gb4oQFZLxg)


## 🖊️ Campos do Formulário

O formulário contém os seguintes campos:  

- **Nome completo** (obrigatório) 🗣️  
- **E-mail** (obrigatório, com validação de formato) 📧  
- **Telefone** (obrigatório) 📞  
- **Cargo Pretendido** (obrigatório, seleção de uma lista pré-definida):  
  - Desenvolvedor Frontend  
  - Desenvolvedor Backend  
  - Desenvolvedor Full Stack  
  - Desenvolvedor Mobile  
  - Desenvolvedor de Software  
  - Engenheiro de Software  
  - Arquiteto de Software  
  - UI/UX Designer  
  - Analista de Sistemas  
  - Analista Programador  
  - DevOps Engineer  
  - Engenheiro de Dados  
  - QA Engineer  
  - Scrum Master  
  - Product Owner  
- **LinkedIn** (opcional) 🌐  
- **GitHub** (opcional) 🐙  

---
![Descrição da Imagem](https://drive.google.com/uc?id=1gm7LeR0gxmBwT65KNvjnA9ZW_wV0pge2)

## ✅ Validação de Dados

O projeto utiliza a biblioteca **Yup** para validação dos campos.  

### Regras de Validação:  
- Campos obrigatórios devem ser preenchidos.  
- O formato do e-mail é validado para garantir consistência.  

---

## 💾 Armazenamento Local

- Os dados dos membros cadastrados são salvos no **Local Storage** do navegador.  
- Uma mensagem de sucesso ou erro é exibida após o cadastro, indicando que os dados foram armazenados com sucesso.  

---

## 📢 Mensagens de Estado

- Mensagens de feedback informam ao usuário o status do cadastro, como:  
  - "Cadastro realizado com sucesso!"  
  - "Já existe um membro cadastrado com este e-mail ou telefone."  

---

## ⚙️ Como Rodar o Projeto

Siga as etapas abaixo para rodar o projeto localmente:  

1. **Clone o repositório:**  
   ```bash
   git clone https://github.com/Projeto-FrontEnd-Fusion/desafio-formulario-com-validacao-frontend.git
   ```
    
 2. **Acesse o diretório do projeto:**
     ```bash 
    cd desafio-formulario-com-validacao-frontend
      ```
 3. **Instale as dependências:**
     ```bash 
     npm install
      ```
 
 3. **Agora é só sodar o projeto :**
     ```bash 
    npm run dev
      ```
 
