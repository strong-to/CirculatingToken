"use client";

import { px } from "@/utils/pxToRem";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";

interface ImageItem {
  src: string;
  alt: string;
  aspectRatio: string;
}

interface ColumnConfig {
  flex: string;
  images: ImageItem[];
}

export default function ImageGrid() {
  // 定义图片数据配置
  const imageConfigs: ColumnConfig[] = [
    {
      flex: "1 1 0",
      images: [
        { src: "/MortgageMarket/img/Mask1.png", alt: "Image 1", aspectRatio: "1 / 1" },
        { src: "/MortgageMarket/img/Mask2.png", alt: "Image 2", aspectRatio: "1 / 2" },
      ],
    },
    {
      flex: "1 1 0",
      images: [
        { src: "/MortgageMarket/img/Mask3.png", alt: "Image 3", aspectRatio: "1 / 2" },
        { src: "/MortgageMarket/img/Mask4.png", alt: "Image 4", aspectRatio: "1 / 1" },
      ],
    },
    {
      flex: "2 1 0",
      images: [
        { src: "/MortgageMarket/img/Mask5.png", alt: "Image 5", aspectRatio: "2 / 1" },
        { src: "/MortgageMarket/img/Mask6.png", alt: "Image 6", aspectRatio: "1 / 1" },
      ],
    },
    {
      flex: "2 1 0",
      images: [
        { src: "/MortgageMarket/img/Mask7.png", alt: "Image 7", aspectRatio: "1 / 1" },
        { src: "/MortgageMarket/img/Mask8.png", alt: "Image 8", aspectRatio: "2 / 1" },
      ],
    },
  ];

  // 如果有第二组图片，也添加进来
  const imageConfigs2: ColumnConfig[] = [
    {
      flex: "1 1 0",
      images: [
        { src: "/MortgageMarket/img2/Mask1.png", alt: "Image 1", aspectRatio: "1 / 1" },
        { src: "/MortgageMarket/img2/Mask2.png", alt: "Image 2", aspectRatio: "1 / 2" },
      ],
    },
    {
      flex: "1 1 0",
      images: [
        { src: "/MortgageMarket/img2/Mask3.png", alt: "Image 3", aspectRatio: "1 / 2" },
        { src: "/MortgageMarket/img2/Mask4.png", alt: "Image 4", aspectRatio: "1 / 1" },
      ],
    },
    {
      flex: "2 1 0",
      images: [
        { src: "/MortgageMarket/img2/Mask5.png", alt: "Image 5", aspectRatio: "2 / 1" },
        { src: "/MortgageMarket/img2/Mask6.png", alt: "Image 6", aspectRatio: "1 / 1" },
      ],
    },
    {
      flex: "2 1 0",
      images: [
        { src: "/MortgageMarket/img2/Mask7.png", alt: "Image 7", aspectRatio: "1 / 1" },
        { src: "/MortgageMarket/img2/Mask8.png", alt: "Image 8", aspectRatio: "2 / 1" },
      ],
    },
  ];

  // 合并所有配置用于循环展示
  const allConfigs = [imageConfigs, imageConfigs2];

  return (
    <div className="w-full h-full flex flex-col">
      {allConfigs.map((configs, configIndex) => (
        <div
          key={configIndex}
          style={{
            flex: 1,
            padding: px(20),
            display: "flex",
            gap: px(20),
          }}
        >
          {configs.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col"
              style={{
                flex: column.flex,
                gap: px(20),
              }}
            >
              {column.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="relative"
                  style={{
                    width: "100%",
                    aspectRatio: image.aspectRatio,
                    overflow: "hidden",
                  }}
                >
                  <ImageWithSkeleton
                    src={image.src}
                    alt={image.alt}
                    fill
                    aspectRatio={image.aspectRatio}
                    objectFit="cover"
                    priority={configIndex === 0 && columnIndex < 2 && imageIndex === 0}
                    loading={configIndex === 0 && columnIndex < 2 && imageIndex === 0 ? undefined : 'lazy'}
                  />

                  {/* 覆盖信息 */}
                  <div
                    className="flex items-center justify-between"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      width: "100%",
                      height: px(60),
                      paddingTop: px(34),
                      paddingLeft: px(10),
                      paddingRight: px(10),
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "ITC Avant Garde Gothic Pro",
                        fontWeight: 300,
                        fontStyle: "normal",
                        fontSize: px(14),
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#FFFFFF",
                      }}
                    >
                      kingplum
                    </div>

                    <div className="flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3965 2.09375C12.033 2.09375 12.6185 2.25016 13.1553 2.56055C13.6925 2.87199 14.1175 3.29257 14.4307 3.8252C14.7434 4.35695 14.8998 4.9379 14.9004 5.56934C14.9004 5.96513 14.833 6.35106 14.6992 6.72754L14.6377 6.8877C14.4626 7.31361 14.2081 7.69292 13.873 8.02539L7.99902 13.8525L2.12598 8.02539C1.83343 7.73501 1.60208 7.40836 1.43164 7.0459L1.3623 6.8877C1.18773 6.46021 1.09966 6.02129 1.09961 5.56934C1.09961 4.93842 1.25604 4.35732 1.56934 3.8252C1.88244 3.29197 2.30786 2.87144 2.84473 2.56055C3.38152 2.25017 3.96654 2.09411 4.60352 2.09375C5.06281 2.09379 5.50609 2.18029 5.93359 2.35254C6.35983 2.52407 6.74272 2.77792 7.08008 3.11328L7.92871 3.95508L7.99902 4.02441L8.06934 3.95508L8.91895 3.11328L9.04688 2.99219C9.35022 2.71881 9.68995 2.5062 10.0664 2.35449C10.4967 2.18093 10.9397 2.09379 11.3955 2.09375H11.3965ZM11.1543 3.09668C10.9138 3.11967 10.6783 3.17744 10.4492 3.26953C10.1424 3.3928 9.86851 3.57448 9.62793 3.81348L8 5.42773L6.37207 3.81348C6.13132 3.5746 5.85774 3.3928 5.55078 3.26953C5.25023 3.14771 4.92827 3.08574 4.60352 3.08594C4.14862 3.08594 3.72778 3.19586 3.34473 3.41797C2.96216 3.63918 2.65989 3.94092 2.43652 4.32031C2.2128 4.70087 2.10059 5.11774 2.10059 5.56934C2.10055 5.89174 2.16361 6.21107 2.28613 6.50977C2.41059 6.81435 2.5935 7.08639 2.83398 7.3252L7.92969 12.3799L8 12.4502L8.07031 12.3799L13.165 7.3252C13.4052 7.08644 13.5888 6.81517 13.7129 6.51074C13.836 6.21199 13.8986 5.89201 13.8984 5.56934C13.8984 5.1178 13.7869 4.70073 13.5635 4.32031C13.3406 3.9408 13.0372 3.63916 12.6543 3.41797C12.3193 3.22357 11.9559 3.11502 11.5654 3.09082L11.3965 3.08594L11.1543 3.09668Z" fill="white"/>
                      </svg>

                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: px(14),
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#FFFFFF",
                          marginLeft: px(2),
                          marginRight: px(7),
                        }}
                      >
                        2.3K
                      </span>

                      <div style={{ marginTop: px(10) }}>
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_d_2845_6147)">
                            <path d="M10.5605 1.89844C14.1654 1.89849 17.1229 4.2742 17.123 7.24609C17.123 10.2181 14.1655 12.5956 10.5605 12.5957C10.1553 12.5957 9.75858 12.5631 9.37305 12.5059L6.57227 14.085L6.42285 14.1689V11.3936C4.94953 10.4165 4 8.92705 4 7.24609C4.00014 4.27418 6.95705 1.89844 10.5605 1.89844ZM10.5605 2.84668C7.47141 2.84668 5.00698 4.83798 5.00684 7.24609C5.00684 8.72691 5.93446 10.0442 7.37012 10.8428L7.42188 10.8711L7.4209 10.9316L7.39746 12.499L9.14648 11.5234L9.17871 11.5049L9.21484 11.5127C9.64711 11.5978 10.096 11.6474 10.5586 11.6475C13.6492 11.6475 16.114 9.65884 16.1143 7.24805C16.1157 4.83854 13.6512 2.84673 10.5605 2.84668Z" fill="white"/>
                          </g>
                          <defs>
                            <filter id="filter0_d_2845_6147" x="0" y="1.89844" width="21.123" height="20.2734" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="4"/>
                              <feGaussianBlur stdDeviation="2"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2845_6147"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2845_6147" result="shape"/>
                            </filter>
                          </defs>
                        </svg>
                      </div>

                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: px(14),
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#FFFFFF",
                          marginRight: px(7),
                        }}
                      >
                        85
                      </span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5C10.5523 5 11 5.44772 11 6C11 6.55229 10.5523 7 10 7C9.44783 6.99987 9.00001 6.55221 9 6C9 5.4478 9.44782 5.00013 10 5Z" fill="white"/>
                        <path d="M7.99858 5.99998C8.29852 5.99998 8.49856 5.79999 8.49856 5.5C8.49856 5.19998 8.29852 5 7.99858 5C6.34854 5 4.99854 6.35 4.99854 8.00003C4.99854 9.64996 6.34854 11 7.99858 11C9.64853 11 10.9985 9.64996 10.9985 8.00001C10.9985 7.70001 10.7986 7.49996 10.4986 7.49996C10.1985 7.49996 9.99856 7.69999 9.99856 8.00001C9.99856 9.09995 9.09852 9.99998 7.99857 9.99998C6.89854 9.99998 5.99852 9.09996 5.99852 8.00001C5.99852 6.89999 6.89854 5.99998 7.99857 5.99998H7.99858Z" fill="white"/>
                        <path d="M8.00007 2C6.95005 2 5.89998 2.30001 5.00002 2.79999C4.75002 2.94998 4.69999 3.24997 4.80002 3.49997C4.95001 3.74998 5.25 3.79998 5.50004 3.65C6.25001 3.24997 7.10001 2.99998 8.00007 2.99998C10.75 2.99998 13.0001 5.25001 13.0001 8.00003C13.0001 10.75 10.75 13 8.00006 13C5.25002 13 2.99999 10.75 2.99999 8.00003C2.99999 7.1 3.24996 6.25 3.65001 5.50001C3.79998 5.25001 3.70002 4.95002 3.49996 4.80003C3.29999 4.65 2.94997 4.75001 2.79998 5.00003C2.29997 5.89997 2 6.95003 2 8.00003C2 11.3 4.70002 14 8.00009 14C11.3 14 14.0001 11.3 14.0001 8.00002C14.0001 4.7 11.3001 2 8.00007 2Z" fill="white"/>
                      </svg>

                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: px(14),
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#FFFFFF",
                          marginLeft: px(2),
                          marginRight: px(7),
                        }}
                      >
                        224
                      </span>

                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9819 6.94329L12.5973 7.3281L8.0306 2.76855L3.46389 7.3281L3.07935 6.94329L8.0306 2L12.9819 6.94329Z" fill="white" stroke="white" strokeWidth="0.4"/>
                        <path d="M8.30292 2.67188V10.0786H7.75903V2.67188H8.30292Z" fill="white" stroke="white" strokeWidth="0.4"/>
                        <path d="M3.54388 11.5V13.1845H12.518V11.5H13.0619V13.7284H3V11.5H3.54388Z" fill="white" stroke="white" strokeWidth="0.4"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
