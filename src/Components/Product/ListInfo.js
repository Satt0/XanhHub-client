import { React, useEffect, useState } from "react";
import feature_origin_icon from "Assets/Images/Icon/feature_origin.png";
import feature_material_icon from "Assets/Images/Icon/feature_material.png";
import feature_end_of_life_icon from "Assets/Images/Icon/feature_end-of-life.png";
import spec_product_care from "Assets/Images/Icon/spec_product-care.png";
import spec_additional_features from "Assets/Images/Icon/spec_additional-features.png";
import spec_returns from "Assets/Images/Icon/spec_returns.png";
import styles from "Assets/Stylesheets/SCSS/Components/ListInfo.module.scss";
const Entities = require("html-entities").AllHtmlEntities;

const entities = new Entities();
export default function ListInfo(props) {
  const features = [
    {
      icon: feature_origin_icon,
      title: "ORIGIN",
      list: props.product.feature__ORIGIN,
    },
    {
      icon: feature_material_icon,
      title: "MATERIALS",
      list: props.product.feature__MATERIALS,
    },
    {
      icon: feature_end_of_life_icon,
      title: "END OF LIFE",
      list: props.product.feature__END_OF_LIFE,
    },
  ];
  const specs = [
    {
      icon: spec_product_care,
      title: "PRODUCT CARE",
      list: props.product.specifications__PRODUCT_CARE,
    },
    {
      icon: spec_additional_features,
      title: "ADDITIONAL FEATURES",
      list: props.product.specifications__ADDITIONAL_FEATURES,
    },
    {
      icon: spec_returns,
      title: "RETURNS",
      list: props.product.specifications__RETURNS,
    },
  ];
  return (
    <>
      <section className={styles.section} id="feature">
        <div className={`${styles.bar} ${styles.featureBar}`}>
          <h1>SUSTAINABILITY FEATURES</h1>
        </div>
        <div className={styles.container}>
          {features.map((obj) => (
            <div className={styles.subContainer}>
              <img src={obj.icon} alt="feature-icon" />
              <div className={styles.text}>
                <header>{obj.title}</header>
                <ul>
                  <li>{entities.decode(obj.list)}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section} id="spec">
        <div className={`${styles.bar} ${styles.specBar}`}>
          <h1>PRODUCT SPECIFICATIONS</h1>
        </div>
        <div className={styles.container}>
          {specs.map((obj) => (
            <div className={styles.subContainer}>
              <img src={obj.icon} alt="feature-icon" />
              <div className={styles.text}>
                <header>{obj.title}</header>
                <ul>
                  <li>{entities.decode(obj.list)}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
