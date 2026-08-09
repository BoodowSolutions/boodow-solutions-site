# Boodow Solutions Website

**Site Next.js profissional e moderno** da Boodow Solutions com:
- ✅ Serviços (Handyman, Limpeza Residencial, Limpeza Comercial)
- ✅ Produtos (Boodow Clean & Boodow Orders) com páginas dedicadas
- ✅ Imagens reais do app Boodow Orders
- ✅ Formulários com integração Resend
- ✅ Design responsivo e moderno
- ✅ SEO otimizado

## Setup Local

### 1. Clonar o repositório
```bash
git clone <seu-repo>
cd boodow-solutions-site
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```
RESEND_API_KEY=seu_chave_resend_aqui
```

**Como conseguir a chave Resend:**
1. Acesse https://resend.com
2. Faça login ou crie conta
3. Vá para API Keys
4. Crie uma nova chave
5. Cole em `.env.local`

### 4. Rodar localmente
```bash
npm run dev
```

Abra http://localhost:3000 no navegador.

---

## Deploy no Vercel

### 1. Fazer push do código para GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Fazer deploy no Vercel

**Opção A: Usando Vercel CLI**
```bash
npm install -g vercel
vercel
```

**Opção B: Usando dashboard Vercel**
1. Acesse https://vercel.com
2. Clique "New Project"
3. Conecte seu GitHub
4. Selecione o repositório `boodow-solutions-site`
5. Clique "Import"

### 3. Configurar variáveis de ambiente no Vercel

1. No dashboard Vercel, vá para "Settings" → "Environment Variables"
2. Adicione:
   - **Name:** `RESEND_API_KEY`
   - **Value:** sua chave Resend
3. Clique "Save"

### 4. Apontar domínio

No dashboard Vercel:
1. Vá para "Domains"
2. Adicione seu domínio `www.boodowsolutions.com`
3. Siga as instruções de DNS (copie os registros do Vercel para seu provedor de domínio)

---

## Estrutura do Projeto

```
├── app/
│   ├── page.js                    # Home
│   ├── layout.js                  # Root layout
│   ├── globals.css               # Estilos globais
│   ├── api/
│   │   └── submit-form/route.js   # API para enviar emails
│   └── servicos/
│       ├── handyman/page.js
│       ├── limpeza-residencial/page.js
│       └── limpeza-comercial/page.js
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── FormModal.js
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Adicionar Conteúdo das Páginas Legais

Você tem 5 páginas de conteúdo legal que precisa adicionar:

1. `/boodow-clean/terms` - Terms do Boodow Clean
2. `/boodow-clean/privacy` - Privacy do Boodow Clean
3. `/boodow-orders/terms` - Terms do Boodow Orders
4. `/boodow-orders/privacy` - Privacy do Boodow Orders
5. `/boodow-clean/confirmed` - Email confirmed page

**Criar os arquivos:**

```bash
mkdir -p app/boodow-clean app/boodow-orders

# Depois criar os files page.js em cada diretório
```

Vou disponibilizar um template em breve.

---

## Formulários

Os formulários estão integrados em:
- **Home:** Formulário genérico de contato
- **Cada serviço:** Formulário com steps específicos

Todos enviam emails para `info@boodowsolutions.com` via Resend.

---

## Customizações

### Cores
Editável em `tailwind.config.js`:
- `boodow-navy` - #0A2342
- `boodow-gold` - #FEDD00
- `boodow-dark` - #16406E

### Conteúdo
- Textos estão nas páginas (não em banco de dados)
- Fácil de editar e fazer deploy novamente

### Email
O email vem de `noreply@boodowsolutions.com` (via Resend).
Para mudá-lo, edite `app/api/submit-form/route.js`.

---

## Próximos Passos

- [ ] Adicionar as 5 páginas legais (terms/privacy)
- [ ] Conectar Resend e testar emails
- [ ] Fazer deploy no Vercel
- [ ] Apontar domínio
- [ ] Testar formulários em produção

---

## Suporte

Para dúvidas sobre:
- **Resend:** https://resend.com/docs
- **Next.js:** https://nextjs.org/docs
- **Tailwind:** https://tailwindcss.com/docs
- **Vercel:** https://vercel.com/docs

---

**Feito com ❤️ para Boodow Solutions**
