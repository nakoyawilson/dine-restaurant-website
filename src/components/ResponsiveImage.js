const ResponsiveImage = ({
  mobileImg,
  tabletImg,
  desktopImg,
  imgDescription,
  imgClasses,
}) => {
  return (
    <picture>
      <source media="(max-width: 699px)" srcSet={mobileImg} />
      <source media="(max-width: 1309px)" srcSet={tabletImg} />
      <source media="(min-width: 1310px)" srcSet={desktopImg} />
      <img src={mobileImg} alt={imgDescription} className={imgClasses} />
    </picture>
  );
};

export default ResponsiveImage;
