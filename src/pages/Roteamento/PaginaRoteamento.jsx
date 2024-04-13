import React, { useContext } from 'react';
import { Route, Router, Switch, useLocation } from 'react-router-dom';



import PaginaLogin from '../PaginaLogin';


import { Layout } from '@/components/Layout';

const PaginaRoteamento = ({ historico, match, ...rest }) => {
  const location = useLocation();
  const background = location?.state?.background;

  return (
    <Router history={historico}>


      <Layout>
        <Switch location={background || location}>
          <Route path="/" component={PaginaLogin} exact {...rest} />
        </Switch>
        
      </Layout>
    </Router>
  );
};

export default PaginaRoteamento;
