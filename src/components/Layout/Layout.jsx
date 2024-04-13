// import './globals.css'

// export const metadata = {
//   title: 'Teste FrontEnd',
//   description: 'Teste para Vaga de FrontEnd - Inicio 12 de abril de 2024',
// }
// globalStyles();

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }



import PropTypes from 'prop-types';
import { MainLayout } from './styles';


const Layout = ({ background, children }) => {
  return (
    <MainLayout id="MainLayout" background={background}>
      {children}
    </MainLayout>
  );
};

Layout.propTypes = {
  background: PropTypes.string,
  children: PropTypes.any,
};


export default Layout;
