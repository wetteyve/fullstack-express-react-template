/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { Layout, Carousel, Card } from 'antd';
import './home-container.scss';
import { StrapiService } from '../../services/strapi-service';
import Loading from '../loading';
import { STRAPI_BASE_URL } from '../../utilities/constants';
import ReactMarkdown from 'react-markdown';

const HomeContainer = () => {
  const [carousselItems, setCarousselItems] = useState<any[] | undefined>(undefined);
  const [currentNews, setCurrentNews] = useState<any | undefined>(undefined);
  const [sponsors, setSponsors] = useState<any[] | undefined>(undefined);
  const [mainSponsor, setMainSponsor] = useState<any | undefined>(undefined);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const strapiService = new StrapiService();
    const landingDataPromise = strapiService.getLandingPageData();
    const mainSponsorPromise = strapiService.getMainSponsor();
    const sponsorsPromise = strapiService.getSponsors();

    Promise.all([landingDataPromise, mainSponsorPromise, sponsorsPromise]).then((values) => {
      setCarousselItems(values[0].landing_caroussel_images);
      setCurrentNews(values[0].current_news);
      setMainSponsor(values[1].main_sponsor_details);
      setSponsors(values[2]);
      setisLoading(false);
    });
  }, []);

  return !isLoading && carousselItems && mainSponsor && sponsors ? (
    <Layout className="home-container-layout">
      <Layout.Header className="header-carousel">
        <Carousel autoplay lazyLoad="ondemand" pauseOnHover={false} autoplaySpeed={4000} effect="scrollx">
          {carousselItems.map((picture: any, index) => (
            <img
              key={index}
              className="home-top-image"
              alt="top-photo"
              src={STRAPI_BASE_URL + picture.formats.large.url}
            />
          ))}
        </Carousel>
      </Layout.Header>
      <Layout.Content className="ant-layout-content-child">
        {currentNews ? (
          <Card title={currentNews.news_title} className="news-card">
            <ReactMarkdown children={currentNews.news_content} />
          </Card>
        ) : null}
        <div className="sponsor-container">
          <Card
            title={'Hauptsponsor'}
            className="sponsor-card"
            cover={
              <img
                className="sponsor-img"
                alt={'hauptsponsor-uht-herisau'}
                src={STRAPI_BASE_URL + mainSponsor.picture.formats.medium.url}
              />
            }
          />
          <Card title={'Sponsoren'} className="sponsor-card" 
          cover={
            <Carousel autoplay lazyLoad="ondemand" pauseOnHover={false} autoplaySpeed={4000} effect="scrollx">
              { sponsors.map((sponsor, index) => (
                  <img key={index} className="sponsor-img" alt={sponsor.sponsor_details.name} src={STRAPI_BASE_URL + sponsor.sponsor_details.picture.url} />
                ))}
            </Carousel>
          }
          />
        </div>
      </Layout.Content>
    </Layout>
  ) : (
    <Loading />
  );
};

export default HomeContainer;
