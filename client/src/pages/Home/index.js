import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import loadCountries from '../../actions/Countries';
import loadTotal from '../../actions/Total';
import { loadArticles } from '../../actions/Article';
import { loadStatus } from '../../actions/Status';

import HeaderComponent from '../../components/HeaderInformation';
import Footer from '../../components/Footer';
import TotalInfecteds from '../../components/TotalInfecteds';
import ListInfecteds from '../../components/ListInfecteds';
import TotalDeaths from '../../components/TotalDeaths';
import ListDeaths from '../../components/ListDeaths';
import TotalSurvivors from '../../components/TotalSurvivors';
import ListSurvivors from '../../components/ListSurvivors';
import Anuncio from '../../components/Anuncio';
import AnuncioSquare from '../../components/AnuncioSquare';
import Chart from '../../components/Chart';
import Mapa from '../../components/Mapa';
import ArtigosIndex from '../../components/ArtigosIndex';
import CookieModal from '../../components/CookieModal';
import Coronavirus from '../../components/Coronavirus';
import Maintenance from '../../pages/Maintenance';

import './index.css';
import Loading from '../../components/Loading';

const HomePage = ({
  loadCountries, countryState, loadTotal, totalState, loadArticles, statusState,
}) => {
  useEffect(() => {
    loadTotal();
    loadCountries();
    loadArticles();
    loadStatus();
  }, []);
  return statusState.loading ? <Loading /> : ((statusState.offline || statusState.data.maintenance)) ? <Maintenance /> : countryState.loading || totalState.loading ? <Loading /> : (
    <>
      <Helmet>
        <title>Coronavírus (COVID-19) - Estatísticas globais atualizadas [2020]</title>
        <meta
          name="description"
          content="Confira as informações e estatísticas mais atuais sobre o Coronavírus (COVID-19) e saiba quais os cuidados a serem tomados!"
        />
      </Helmet>
      <HeaderComponent />
      <div className="container">
        <CookieModal />
        <div className="row justify-content-lg-center">
          <div className="col-lg-3">
            <TotalInfecteds />
          </div>
          <div className="col-lg-6">
            <Anuncio />
          </div>
          <div className="col-lg-3">
            <TotalDeaths />
          </div>
        </div>
        <div className="row justify-content-lg-center">
          <div className="col-lg-3">
            <ListInfecteds />
          </div>
          <div className="col-lg-6">
            <Mapa />
          </div>
          <div className="col-lg-3">
            <ListDeaths />
          </div>
        </div>
        <div className="row justify-content-lg-center">
          <div className="col-lg-3">
            <TotalSurvivors />
          </div>
          <div className="class col-lg-9">
            <div className="sombra">
              <ListSurvivors />
            </div>
          </div>
        </div>
        <div className="row justify-content-lg-center">
          <div className="col-lg-3 anuncio-square">
            <AnuncioSquare />
          </div>
          <div className="class col-lg-9">
            <Chart />
          </div>
        </div>
        <div className="row justify-content-lg-center">
          <div className="col-lg-12">
            <ArtigosIndex />
          </div>
        </div>
        <div className="row justify-content-lg-center">
          <div className="col-lg-12">
            <Coronavirus />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

HomePage.propTypes = {
  loadCountries: PropTypes.func.isRequired,
  countryState: PropTypes.object.isRequired,
  loadTotal: PropTypes.func.isRequired,
  totalState: PropTypes.object.isRequired,
  loadArticles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  countryState: state.countriesReducer,
  totalState: state.totalReducer,
  statusState: state.statusReducer,
});

export default connect(mapStateToProps, { loadCountries, loadTotal, loadArticles, loadStatus })(HomePage);
