import React from "react";
import ContentLoader from "react-content-loader";

type skeletonBlockProps = {};

const SkeletonBlock: React.FC<skeletonBlockProps> = (props) => (
  <ContentLoader
    speed={2}
    width={340}
    height={441}
    viewBox="0 0 340 441"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="32" cy="332" r="15" />
    <rect x="15" y="225" rx="15" ry="15" width="310" height="16" />
    <rect x="15" y="250" rx="15" ry="15" width="310" height="57" />
    <rect x="15" y="15" rx="15" ry="15" width="310" height="200" />
    <rect x="60" y="323" rx="15" ry="15" width="104" height="22" />
  </ContentLoader>
);

export default SkeletonBlock;
