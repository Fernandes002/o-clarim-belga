import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    // Adicione o nome exato do seu repositório do GitHub aqui
    base: '/o-clarim-belga/',

    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        // Redireciona '@' para a pasta 'src' facilitando imports limpos como '@/components/ArticleView'
        '@': path.resolve(__dirname, './src'),
        // Mantém uma referência para a raiz caso precise importar arquivos como metadata.json
        '@root': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Configurações recomendadas para plataformas de mídia e portais de notícias:
      target: 'esnext',
      minify: 'esbuild',
      cssMinify: true,

      // Desabilita sourcemaps em produção para reduzir o tamanho final dos arquivos e proteger o código-fonte
      sourcemap: !isProduction,

      // Invalida o cache do navegador de forma eficiente gerando hashes limpos
      chunkFileNames: 'assets/js/[name]-[hash].js',
      entryFileNames: 'assets/js/[name]-[hash].js',
      assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',

      // Evita requisições HTTP adicionais para arquivos muito pequenos (ícones, micro-vetores)
      // embutindo-os diretamente como Base64 se forem menores que 4kb
      assetsInlineLimit: 4096,
    },
    // Otimização de entrega de código
    esbuild: {
      // Remove logs de depuração e declarações debugger no build final de produção
      // para evitar vazamento de dados estruturais e economizar bytes
      drop: isProduction ? ['console', 'debugger'] : [],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});