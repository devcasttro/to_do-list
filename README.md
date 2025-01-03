To Do List - Lista de Tarefas Avançada
Este é um projeto de To Do List (Lista de Tarefas) desenvolvido utilizando HTML, CSS, e JavaScript. A aplicação permite que os usuários gerenciem suas tarefas com funcionalidades como adicionar, editar, remover, filtrar, buscar e acompanhar o progresso das tarefas. Além disso, todas as tarefas são salvas no LocalStorage, o que significa que elas permanecem salvas mesmo após o fechamento do navegador.

Funcionalidades
Adicionar Tarefa: Permite ao usuário adicionar novas tarefas à lista.
Editar Tarefa: O usuário pode editar o texto de uma tarefa já existente.
Remover Tarefa: As tarefas podem ser removidas da lista.
Concluir Tarefa: Marque tarefas como concluídas, o que as altera visualmente.
Filtrar Tarefas: O usuário pode filtrar as tarefas para visualizar apenas as concluídas, as pendentes ou todas as tarefas.
Buscar Tarefas: Permite ao usuário buscar por tarefas pelo nome.
Persistência de Dados: O estado das tarefas (feitas ou não) e as próprias tarefas são armazenados no LocalStorage, garantindo que os dados persistam entre as sessões.
Tecnologias Utilizadas
HTML: Estrutura do site e da interface.
CSS: Estilização da página.
JavaScript: Lógica da aplicação, manipulação de DOM e interação com o LocalStorage.
Chart.js: Para exibir um gráfico de acompanhamento das tarefas (feitas vs não feitas).
Como Usar
1. Clonando o Repositório
Para começar, faça o clone deste repositório em sua máquina local:

bash
Copiar código
git clone https://github.com/devcasttro/to_do-list.git
2. Estrutura do Projeto
A estrutura do projeto é a seguinte:

bash
Copiar código
to_do_list/
├── index.html        # Arquivo principal HTML
├── css/
│   └── style.css     # Estilos CSS
├── img/
│   └── favicon.ico   # Favicon do site
├── js/
│   └── script.js     # Lógica e comportamento da aplicação
└── README.md         # Documento de documentação
3. Como Rodar Localmente
Para rodar o projeto localmente, basta abrir o arquivo index.html no seu navegador:

Navegue até o diretório onde o projeto foi clonado.
Abra o arquivo index.html diretamente no navegador ou use um servidor local se preferir.
4. Funcionalidades Detalhadas
Adicionar Tarefa
Preencha o campo de texto "O que você vai fazer?" e clique no ícone de adicionar para criar uma nova tarefa.
A tarefa será adicionada à lista e será armazenada no LocalStorage.
Editar Tarefa
Clique no ícone de editar ao lado de uma tarefa para alterar seu conteúdo.
Ao salvar a edição, a tarefa será atualizada tanto na lista quanto no LocalStorage.
Concluir Tarefa
Clique no ícone de check ao lado de uma tarefa para marcá-la como concluída.
As tarefas concluídas aparecem com um fundo diferente e o texto riscado.
Remover Tarefa
Clique no ícone de remover (X) ao lado de uma tarefa para removê-la permanentemente.
A tarefa será excluída da lista e do LocalStorage.
Filtrar Tarefas
Use o dropdown de Filtrar para visualizar:
Todos: Exibe todas as tarefas, tanto as feitas quanto as não feitas.
Feitos: Exibe apenas as tarefas concluídas.
A Fazer: Exibe apenas as tarefas que ainda não foram concluídas.
Buscar Tarefas
Use o campo de buscar para filtrar as tarefas pelo nome. À medida que você digita, as tarefas que correspondem à busca serão mostradas.
Gráfico de Acompanhamento
A aplicação utiliza o Chart.js para exibir um gráfico de progresso com base nas tarefas concluídas vs não concluídas. Este gráfico é atualizado automaticamente sempre que uma tarefa for marcada como concluída ou reaberta.
Como Contribuir
Se você gostaria de contribuir para este projeto, siga estas etapas:

Fork este repositório.
Crie uma nova branch com a sua feature ou correção: git checkout -b minha-feature.
Faça commit das suas alterações: git commit -m 'Adicionando nova feature'.
Push para a sua branch: git push origin minha-feature.
Abra um Pull Request para o repositório principal.


Autor
Lucas Castro


![image](https://github.com/user-attachments/assets/6f93fa0c-66fe-4352-81d3-61180a59f2a6)
