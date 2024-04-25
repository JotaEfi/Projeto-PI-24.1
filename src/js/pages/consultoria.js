import "../../styles/css/style.css";
import "../../styles/css/queries.css";
import NavBar from '../components/nav-bar';


function Consultoria() {
  return (  
    <div className="container">
      {NavBar()}
      <div className="main-content-container">
      

        <div className="main-content-content">
          <h1>Nome da Pessoa</h1>
        </div>
      </div>
      <section className="consultoria-start-section">
        <div className="consultoria-start-container">
          <div className="consultoria-start-content">
            <h1>CONSULTORIA ONLINE: COMO FUNCIONA ?</h1>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, borderRadius: 15, backgroundColor: 'rgb(228, 176, 81)', color: 'black', width: 150, height: 50}}>Compre agora</button>
            <h4>ACESSO AO QUESTIONÁRIO DE SAÚDE:</h4>
            <p>
              Você terá acesso ao Questionário, onde todas as suas informações deverão ser preenchidas com informações como: objetivo, idade, altura, rotina, lesões, experiência de treino.  Todas essas informações serão utilizadas para montar um treino completamente individualizado para que você possa obter máximo de resultado.
            </p>
            <h4>ANÁLISE POSTURAL E DINÂMICA:</h4>
            <p>
              Por meio das fotos e vídeos que serão enviadas por você no questionário de saúde, será feita identificação de possíveis desvios posturais posturais, desequilíbrios musculares para prescrição de exercícios visando a melhora do quadro.
            </p>
            <h4>TREINO E ACOMPANHAMENTO:</h4>
            <p>
              Seu treino será enviado pelo aplicativo exclusivo(custo adicional de 24,90 mensal) cujo acesso será liberado após a compra do seu plano, aprovação do seu cadastro e pagamento do aplicativo pela APP STORE ou GOOGLE PLAY.  Nele você terá acesso aos exercícios,  aos alongamentos, aeróbico e toda estrutura.

              Suas dúvidas sobre o treino e a correção das execuções dos movimentos serão todas feitas de segunda á sexta pelo Whatsapp de dúvidas exclusivo para alunos, com prazo de resposta de 24h úteis.
              Após o prazo de vencimento do seu treino, havendo ainda plano ativo você precisará enviar uma nova anamnese, para nova análise e envio do próximo plano de treino. Esse processo será repetido até que acabe seu plano.

              ATENÇÃO: esse plano não engloba acompanhamento para atletas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Consultoria;