import React, { useEffect, useState } from 'react';
import { Layout, Carousel } from 'antd';
import './home-container.scss';
import { StrapiService } from '../../services/strapi-service';
import Loading from '../loading';

const HomeContainer = () => {
  const [carousselItems, setCarousselItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const strapiService = new StrapiService();
    strapiService.getLandingPageData().then((landingData) => {
      setCarousselItems(landingData.landing_caroussel_images);
      setisLoading(false);
    });
  }, []);

  return !isLoading && carousselItems ? (
    <Layout className="home-container-layout">
      <Layout.Header className='test-2'>
        <Carousel autoplay>
          <div>
            <h3 className="test">1</h3>
          </div>
          <div>
            <h3 className="test">2</h3>
          </div>
          <div>
            <h3 className="test">3</h3>
          </div>
          <div>
            <h3 className="test">4</h3>
          </div>
        </Carousel>
      </Layout.Header>
      <Layout.Content className="ant-layout-content-child">{' Hier Home Content'}</Layout.Content>
    </Layout>
  ) : (
    <Loading />
  );
};

export default HomeContainer;
