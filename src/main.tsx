import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 1. Validação de Montagem Segura (Evita o operador '!' não-seguro)
// O uso direto de 'getElementById("root")!' assume que o DOM sempre carregará perfeitamente.
// Em conexões ruins ou sob scripts bloqueados, isso pode gerar um erro fatal de JS que trava a tela em branco.
const rootElement = document.getElementById('root');

if (!rootElement) {
  // Em produção, isso dispararia um evento para serviços de telemetria (como Sentry ou LogRocket)
  console.error(
    'Falha Crítica de Inicialização: O elemento de montagem HTML "#root" não foi encontrado no DOM. ' +
    'Certifique-se de que o index.html não foi corrompido ou bloqueado por extensões do navegador.'
  );
} else {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// 2. Sistema de Telemetria e Captura Global de Erros Silenciosos (Produção)
// Captura falhas de conexões com APIs (como o Gemini ou seu backend local) que não foram tratadas 
// nos blocos try/catch locais dos componentes, impedindo travamentos silenciosos.
if (!import.meta.env.DEV) {
  window.addEventListener('unhandledrejection', (event) => {
    // Espaço para integração com ferramentas de rastreamento de erros (ex: Sentry.captureException)
    console.warn('O Clarim Belga [Telemetria de Erro]:', event.reason);
  });

  window.addEventListener('error', (event) => {
    console.warn('O Clarim Belga [Telemetria de Erro Global]:', event.error);
  });
} else {
  // Informação útil de carregamento em ambiente de desenvolvimento local
  console.log('O Clarim Belga [Ambiente de Desenvolvimento Ativo]');
}
