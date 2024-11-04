const Menu = ({size = 32 , color = 'none'}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.79999 8.00002C4.79999 7.57568 4.96856 7.16871 5.26862 6.86865C5.56868 6.5686 5.97564 6.40002 6.39999 6.40002H25.6C26.0243 6.40002 26.4313 6.5686 26.7314 6.86865C27.0314 7.16871 27.2 7.57568 27.2 8.00002C27.2 8.42437 27.0314 8.83134 26.7314 9.13139C26.4313 9.43145 26.0243 9.60002 25.6 9.60002H6.39999C5.97564 9.60002 5.56868 9.43145 5.26862 9.13139C4.96856 8.83134 4.79999 8.42437 4.79999 8.00002ZM4.79999 16C4.79999 15.5757 4.96856 15.1687 5.26862 14.8687C5.56868 14.5686 5.97564 14.4 6.39999 14.4H25.6C26.0243 14.4 26.4313 14.5686 26.7314 14.8687C27.0314 15.1687 27.2 15.5757 27.2 16C27.2 16.4244 27.0314 16.8313 26.7314 17.1314C26.4313 17.4315 26.0243 17.6 25.6 17.6H6.39999C5.97564 17.6 5.56868 17.4315 5.26862 17.1314C4.96856 16.8313 4.79999 16.4244 4.79999 16ZM4.79999 24C4.79999 23.5757 4.96856 23.1687 5.26862 22.8687C5.56868 22.5686 5.97564 22.4 6.39999 22.4H25.6C26.0243 22.4 26.4313 22.5686 26.7314 22.8687C27.0314 23.1687 27.2 23.5757 27.2 24C27.2 24.4244 27.0314 24.8313 26.7314 25.1314C26.4313 25.4315 26.0243 25.6 25.6 25.6H6.39999C5.97564 25.6 5.56868 25.4315 5.26862 25.1314C4.96856 24.8313 4.79999 24.4244 4.79999 24Z"
        fill="black"
      />
    </svg>
  );
};


export default Menu