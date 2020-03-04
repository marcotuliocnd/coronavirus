import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import loadCountries from '../../actions/Countries';
import loadTotal from '../../actions/Total';

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

import './index.css';
import Loading from '../../components/Loading';

const HomePage = ({
  loadCountries, countryState, loadTotal, totalState,
}) => {
  useEffect(() => {
    loadTotal();
    loadCountries();
  }, []);
  return countryState.loading || totalState.loading ? <Loading /> : (
    <>
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
          <div className="col-lg-3">
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
};

const mapStateToProps = (state) => ({
  countryState: state.countriesReducer,
  totalState: state.totalReducer,
});

export default connect(mapStateToProps, { loadCountries, loadTotal })(HomePage);
