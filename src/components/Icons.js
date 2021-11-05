import React from "react";
import Svg, { DimmedSvg } from "../styles/Svg";

export const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#990038" />
    <circle cx="16" cy="16" r="15.2441" fill="#CC004A" />
    <circle cx="16.0001" cy="16" r="14.4882" fill="#FF005C" />
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="30" height="30">
      <circle cx="16.0001" cy="16" r="14.4882" fill="#919191" />
    </mask>
    <g mask="url(#mask0)">
      <path d="M2.01929 31.5547C2.01929 31.4993 2.08236 31.3571 2.15945 31.2386C2.23654 31.1202 2.41601 30.695 2.55827 30.2939C3.13559 28.6661 4.0361 27.571 4.79746 27.571C4.90993 27.571 4.86845 27.6566 4.65022 27.8746C4.48312 28.0416 4.37384 28.2056 4.40738 28.2391C4.44092 28.2727 4.52473 28.2231 4.59361 28.1289C4.66526 28.031 4.81791 27.9687 4.95032 27.9832C5.12579 28.0025 5.18937 27.9557 5.21319 27.7898C5.23904 27.6098 5.30806 27.5698 5.60281 27.5642C5.88641 27.5588 5.92047 27.5407 5.76636 27.4774C5.59125 27.4055 5.58834 27.3906 5.73737 27.3297C5.82848 27.2925 5.94892 27.2904 6.00502 27.3251C6.06111 27.3597 6.10711 27.3308 6.10723 27.2607C6.10747 27.1321 7.03 26.5986 7.25213 26.5986C7.3182 26.5986 7.37225 26.6449 7.37225 26.7016C7.37225 26.7582 7.41903 26.7757 7.47621 26.7404C7.53339 26.7051 7.55666 26.615 7.52793 26.5401C7.49441 26.4529 7.54229 26.4041 7.66154 26.4041C7.76376 26.4041 7.87146 26.3652 7.90088 26.3176C7.9303 26.2701 8.07255 26.2015 8.217 26.1653C8.36145 26.1291 8.60345 26.0113 8.75479 25.9037C8.90612 25.796 9.36866 25.5612 9.78265 25.3818C10.4106 25.1097 10.5794 24.9861 10.8012 24.6359C11.1198 24.1327 11.1321 23.9762 10.876 23.6812C10.6776 23.4527 10.626 23.2923 10.7508 23.2923C10.9293 23.2923 13.0172 25.6587 13.0172 25.8611C13.0172 25.9313 13.2033 26.1134 13.4308 26.2657C13.6583 26.4181 13.8627 26.5554 13.885 26.5707C13.9073 26.586 13.9008 26.6233 13.8705 26.6536C13.7591 26.7649 12.5679 26.0754 12.2142 25.6948C11.7866 25.2346 11.7592 25.3198 12.0926 26.0731C12.3866 26.7374 12.3921 26.8852 12.1412 27.3766C12.0267 27.6008 11.9466 27.9497 11.9466 28.2239V28.69L11.2896 28.9155C10.4549 29.202 9.92068 29.5587 8.58883 30.7187L7.51824 31.6512L4.76876 31.6534C2.93703 31.6548 2.01929 31.6219 2.01929 31.5548V31.5547ZM11.4934 24.382C11.4625 24.264 11.3986 24.1675 11.3513 24.1675C11.2358 24.1675 11.2429 24.2315 11.3833 24.4561C11.5289 24.6891 11.5671 24.6635 11.4934 24.382ZM16.3263 31.5917C16.3263 31.4425 17.9952 28.3172 18.3669 27.7704C18.7689 27.1789 19.098 26.5155 19.0254 26.4429C19.0048 26.4224 18.4439 26.6066 17.7788 26.8523C16.4041 27.3602 16.1893 27.3662 15.1497 26.9257C14.2908 26.5618 13.7919 26.2189 13.5706 25.8403C13.4675 25.664 13.4006 25.5024 13.4218 25.4812C13.443 25.46 13.6452 25.6184 13.8711 25.8332C14.3422 26.2811 15.4507 26.8903 15.7945 26.8903C15.9224 26.8903 16.2493 26.8028 16.5209 26.6958C16.7926 26.5889 17.104 26.5013 17.2131 26.5013C17.4584 26.5013 18.5648 25.4642 18.5648 25.2343C18.5648 25.142 18.6375 25.0064 18.7263 24.933C18.9408 24.7557 19.3413 23.8868 19.3425 23.5961C19.343 23.4691 19.4469 23.119 19.5733 22.8182C19.8615 22.1322 20.0247 21.6244 20.0247 21.4134C20.0247 21.3236 20.0904 21.2501 20.1707 21.2501C20.3671 21.2501 20.3629 21.7539 20.1634 22.1395C19.9242 22.6015 19.4714 24.0676 19.4034 24.5996L19.342 25.0805L19.6382 24.7968C19.8012 24.6408 19.9609 24.4026 19.993 24.2674C20.0252 24.1322 20.091 23.9714 20.1391 23.91C20.2261 23.7991 20.2662 23.6613 20.4062 22.993C20.4463 22.8017 20.5055 22.6023 20.5379 22.55C20.5703 22.4977 20.6199 22.1269 20.6482 21.7261C20.6765 21.3253 20.7752 20.8245 20.8677 20.6132C20.9659 20.3886 21.0249 20.0472 21.0097 19.7914C20.9954 19.5496 21.0795 19.0275 21.1977 18.6245C21.4829 17.6522 21.628 16.8427 21.5524 16.6457C21.4303 16.3278 21.1299 16.4637 20.9575 16.9148C20.7147 17.5501 20.4464 17.6838 19.4524 17.6653C18.5466 17.6484 17.4657 17.5012 17.1986 17.3584C16.9274 17.2133 16.5324 16.6967 16.2199 16.0781C15.7135 15.0758 15.149 15.0811 14.7707 16.0917C14.5005 16.8136 14.0891 17.4016 13.7211 17.5917C13.1873 17.8675 11.5953 18.1019 10.5908 18.0526C10.4434 18.0454 10.1926 17.8676 9.92505 17.5804C9.50925 17.1343 9.49124 17.1259 9.3509 17.313C9.24704 17.4515 9.22149 17.6438 9.26067 17.9924C9.37084 18.9726 9.49887 19.6556 9.65032 20.0711C9.73562 20.3051 9.80542 20.6461 9.80542 20.8287C9.80542 21.2043 10.1131 22.266 10.3956 22.8653C10.4993 23.0851 10.584 23.3381 10.584 23.4275C10.584 23.6451 10.3097 23.739 10.0845 23.5985C9.84794 23.4509 9.85473 23.5352 10.108 23.8906C10.2209 24.0491 10.2919 24.2001 10.2657 24.2263C10.2395 24.2524 9.93028 24.1158 9.57856 23.9226C9.0761 23.6467 8.88432 23.4738 8.68344 23.1158C8.27999 22.3967 8.19951 21.8055 8.38386 20.9148C8.55947 20.0664 8.59775 18.6747 8.44285 18.7704C8.38932 18.8034 8.34552 18.9373 8.34552 19.0678C8.34552 19.4343 8.10358 19.3506 7.90755 18.9162C7.811 18.7023 7.69227 18.5272 7.64371 18.5272C7.59515 18.5272 7.58062 18.568 7.61142 18.6178C7.64221 18.6676 7.63049 18.7311 7.58537 18.759C7.46036 18.8362 6.36152 17.666 6.05209 17.1262C5.82966 16.7381 5.77068 16.4996 5.73658 15.8503C5.69558 15.0699 5.70487 15.0291 6.14414 14.0586C6.57734 13.1016 6.59364 13.032 6.59364 12.1414C6.59364 11.2751 6.69286 10.6778 7.05126 9.3862C7.21838 8.78397 7.70133 8.24747 8.58449 7.68299C8.86668 7.50263 9.21634 7.21401 9.36152 7.04162C9.62909 6.7239 10.1854 6.3716 10.4195 6.3716C10.49 6.3716 10.6735 6.24032 10.8274 6.07987C10.9992 5.9006 11.055 5.78813 10.9721 5.78813C10.6772 5.78813 11.05 5.61844 11.606 5.4996C11.9271 5.43095 12.3137 5.27086 12.465 5.14385C12.7601 4.89618 12.9783 4.83542 12.8578 5.03448C12.8173 5.10134 12.9288 5.01264 13.1054 4.83739C13.2821 4.66213 13.5864 4.44068 13.7816 4.34528C13.9768 4.24987 14.2329 4.11052 14.3509 4.03561C14.5321 3.92047 14.6676 3.91916 15.2268 4.02713C15.5906 4.09738 16.1511 4.18692 16.4723 4.22611C17.4162 4.34129 18.0782 4.71532 18.0782 5.13347C18.0782 5.23833 18.1635 5.3424 18.2728 5.37097C18.3799 5.39895 18.4675 5.46307 18.4675 5.51347C18.4675 5.56388 18.5132 5.57689 18.5691 5.54238C18.6249 5.50788 18.7235 5.52119 18.7881 5.57195C18.8526 5.62271 19.1953 5.68994 19.5496 5.72133C19.9866 5.76006 20.4716 5.89897 21.0581 6.15334C21.7649 6.45987 22.0345 6.64258 22.536 7.15496C22.8733 7.49964 23.1167 7.69526 23.0768 7.58966C22.9518 7.25895 24.098 8.32378 24.3794 8.79981C24.6054 9.18216 24.6377 9.33664 24.6235 9.96967C24.6146 10.3708 24.6556 11.0293 24.7148 11.433C24.8085 12.0723 24.7995 12.2355 24.6452 12.6972C24.5153 13.0859 24.466 13.541 24.4605 14.4028L24.4531 15.5782L24.0638 16.142C23.374 17.1411 23.3348 17.2109 23.3343 17.4429C23.3338 17.7249 23.0474 18.3477 22.9469 18.2856C22.9064 18.2606 22.8944 18.1297 22.9203 17.9947C22.9785 17.6905 22.8923 17.6779 22.737 17.9678C22.4333 18.5347 22.7333 19.4855 23.4163 20.1206C23.8435 20.5178 24.2424 21.3013 24.1681 21.5971C24.0968 21.881 24.3598 22.2795 25.1198 23.0388C25.5843 23.503 25.789 23.6336 26.2334 23.7496C26.7598 23.8869 27.9657 24.445 27.7565 24.4545C27.6998 24.457 27.2875 24.3258 26.8402 24.1627C25.8457 23.8 25.7407 23.8514 25.786 24.6782L25.8157 25.22L26.205 25.0842C26.4191 25.0095 26.8823 24.9477 27.2343 24.9469C27.7927 24.9455 27.9035 24.9765 28.1037 25.1895C28.2317 25.3256 28.4005 25.4121 28.4856 25.3851C28.5962 25.35 28.6381 25.4033 28.6381 25.5787C28.6381 25.7118 28.6129 25.8206 28.582 25.8206C28.5511 25.8206 28.5437 25.9424 28.5656 26.0911C28.6044 26.3552 28.6192 26.3612 29.1936 26.3431C29.6879 26.3275 29.815 26.3589 29.9886 26.5396C30.1023 26.6579 30.1848 26.7345 30.1719 26.7099C30.1589 26.6853 30.1972 26.6064 30.2568 26.5346C30.3942 26.3692 30.6698 26.3633 30.6069 26.5271C30.5725 26.6168 30.6625 26.6403 30.939 26.614C31.1476 26.5941 31.3803 26.6293 31.4562 26.6922C31.5475 26.7679 31.6538 26.776 31.7707 26.7161C31.8678 26.6663 32.1638 26.5973 32.4286 26.5627C32.6933 26.5282 32.9361 26.4575 32.9682 26.4057C33.0019 26.3511 33.4541 26.4846 34.0432 26.7231C34.9643 27.096 35.0658 27.1622 35.1223 27.4259C35.1566 27.586 35.1898 28.6031 35.1961 29.6862L35.2076 31.6554H25.767C20.5746 31.6554 16.3263 31.6267 16.3263 31.5917L16.3263 31.5917ZM32.6772 26.9876C32.6772 26.9341 32.6005 26.891 32.5068 26.8918C32.3613 26.8932 32.3577 26.907 32.4825 26.9876C32.6662 27.1062 32.6772 27.1062 32.6772 26.9876ZM23.8204 23.195C23.8777 23.088 23.9027 23.0005 23.8759 23.0005C23.8492 23.0005 23.7804 23.088 23.7231 23.195C23.6658 23.302 23.6408 23.3895 23.6676 23.3895C23.6944 23.3895 23.7631 23.302 23.8204 23.195ZM21.6763 22.417C21.6763 22.2874 21.6658 22.2874 21.5819 22.417C21.53 22.4973 21.4876 22.6286 21.4876 22.7088C21.4876 22.8384 21.4981 22.8384 21.5819 22.7088C21.6338 22.6286 21.6763 22.4973 21.6763 22.417ZM21.2899 21.8566C21.2899 21.8158 21.3885 21.7393 21.5089 21.6865C21.8243 21.5482 21.9601 20.8612 21.7389 20.5238C21.5675 20.2624 21.3087 20.197 21.2463 20.3992C21.1532 20.7011 21.1146 21.9308 21.1983 21.9308C21.2487 21.9308 21.2899 21.8974 21.2899 21.8566V21.8566ZM23.7231 21.5028C23.7231 21.4296 23.0174 21.0476 22.9699 21.095C22.9439 21.1211 23.0698 21.2321 23.2498 21.3417C23.5629 21.5324 23.7231 21.587 23.7231 21.5028V21.5028ZM10.6246 17.4186C10.4149 17.2368 10.2215 17.1091 10.1948 17.1349C10.1283 17.1991 10.7542 17.7493 10.8938 17.7493C10.9554 17.7493 10.8342 17.6005 10.6246 17.4186V17.4186ZM13.2835 17.3205C13.8561 17.1301 14.1324 16.8206 14.3376 16.1395C14.4493 15.7686 14.4468 15.6907 14.319 15.563C14.2377 15.4818 14.0977 15.4148 14.0078 15.4141C13.918 15.4132 13.735 15.3893 13.6011 15.3606L13.3578 15.3084L13.5768 15.471C13.6973 15.5604 13.7958 15.697 13.7958 15.7745C13.7958 15.8568 13.6593 15.7708 13.468 15.5682C13.1884 15.272 13.0771 15.2209 12.711 15.2209C12.1289 15.2209 11.5573 15.6069 11.5573 16C11.5573 16.2993 11.3208 16.1869 11.2832 15.8698C11.245 15.5472 11.144 15.5441 10.7387 15.853C10.3751 16.1301 10.3222 16.1437 10.2656 15.9745C10.2432 15.9077 10.2453 15.9843 10.2702 16.1447C10.3325 16.546 10.5556 16.973 10.8563 17.2664C11.0892 17.4936 11.1739 17.512 11.9414 17.5014C12.4432 17.4945 12.9763 17.4226 13.2835 17.3205L13.2835 17.3205ZM12.1335 16.0382C11.9425 15.8082 12.2067 15.3768 12.5638 15.3354C12.9123 15.2951 13.1145 15.4672 13.1145 15.8041C13.1145 16.0261 13.0626 16.0822 12.8104 16.1326C12.3635 16.2219 12.276 16.2097 12.1335 16.0382V16.0382ZM20.2673 17.1669C20.3014 17.1118 20.2624 17.0955 20.1757 17.1287C20.0071 17.1934 19.9763 17.2631 20.1163 17.2631C20.1667 17.2631 20.2346 17.2198 20.2673 17.1669ZM20.1694 16.7781C20.6274 16.3346 20.6917 15.9802 20.3868 15.5807C20.1294 15.2435 19.6762 14.9532 19.5711 15.0583C19.5355 15.0938 19.5533 15.2255 19.6105 15.351C19.6677 15.4765 19.6823 15.6313 19.6429 15.6951C19.5435 15.8557 19.3096 15.7467 19.1954 15.4865C19.0684 15.1974 18.433 14.8923 18.1209 14.9706C17.9876 15.004 17.7045 15.1885 17.4918 15.3806C17.0552 15.7747 16.9664 15.7163 17.367 15.2985C17.5589 15.0984 17.6003 14.9962 17.5213 14.9173C17.3832 14.7793 16.5597 15.0769 16.4759 15.2952C16.3304 15.6739 16.8746 16.6349 17.4325 16.9846C17.6986 17.1513 17.8716 17.1709 18.7869 17.1382C19.8224 17.1011 19.8408 17.0963 20.1694 16.7781V16.7781ZM17.9565 15.8938C17.7357 15.7653 17.7392 15.4881 17.9642 15.2846C18.1885 15.0818 18.5055 15.0783 18.7038 15.2765C19.1359 15.7081 18.5165 16.2197 17.9565 15.8938L17.9565 15.8938ZM11.022 14.8466C11.1826 14.7839 11.5768 14.6913 11.8979 14.6408L12.4819 14.5491L11.784 14.5797C11.0071 14.6138 10.3634 14.876 10.3059 15.1817C10.273 15.3564 10.2839 15.3554 10.5005 15.1637C10.6267 15.052 10.8614 14.9093 11.022 14.8466V14.8466ZM21.4831 14.8991C21.4839 14.8558 21.4408 14.8475 21.3873 14.8805C21.3337 14.9136 21.2906 15.0146 21.2914 15.1051C21.2928 15.2468 21.306 15.2494 21.3873 15.1237C21.4392 15.0434 21.4823 14.9424 21.4831 14.8991ZM20.6087 14.636C20.6087 14.4829 20.0041 14.1515 19.7327 14.1558C19.5346 14.159 19.5599 14.1848 19.8687 14.2948C20.0773 14.3691 20.3166 14.4984 20.4005 14.5823C20.5795 14.7611 20.6087 14.7686 20.6087 14.636ZM15.864 14.4429C16.0165 14.4429 16.2792 14.3717 16.4478 14.2846C16.6164 14.1975 16.9755 14.0475 17.2459 13.9513C17.5163 13.8551 17.6798 13.7732 17.6093 13.7693C17.4239 13.759 17.5589 13.384 17.8701 13.045C18.0113 12.8911 18.4882 12.5978 18.9298 12.393C19.3714 12.1882 19.7327 12.0004 19.7327 11.9756C19.7327 11.6497 19.3777 11.5903 19.14 11.8765C19.0782 11.9509 18.9563 12.0122 18.8692 12.0128C18.7821 12.0133 18.4903 12.1163 18.2208 12.2417C17.9513 12.3671 17.521 12.5011 17.2646 12.5395C16.8444 12.6025 16.7932 12.5895 16.7456 12.4078C16.7166 12.297 16.6542 12.2063 16.6069 12.2063C16.4319 12.2063 16.5295 11.9921 16.8129 11.7538C17.1381 11.4804 17.1944 11.2371 16.9346 11.2277C16.8086 11.2231 16.8236 11.1978 16.9922 11.1303C17.1176 11.0801 17.26 11.0635 17.3085 11.0935C17.3571 11.1235 17.3969 11.0799 17.3969 10.9965C17.3969 10.8982 17.3027 10.8415 17.1292 10.8354C16.8695 10.8262 16.8719 10.8217 17.2094 10.6829C17.6727 10.4923 17.8539 10.0357 17.6758 9.50775C17.4829 8.93567 17.393 8.87412 17.0546 9.08236C16.8449 9.21143 16.7011 9.43372 16.537 9.88279C16.1225 11.0166 15.6673 11.8836 15.2983 12.2416C14.8629 12.6641 14.5784 12.7308 14.8267 12.3522C14.9144 12.2185 15.0468 12.1091 15.1209 12.1091C15.195 12.1091 15.2557 12.0653 15.2557 12.0118C15.2557 11.8486 15.1493 11.9001 14.759 12.2525C14.1083 12.8398 13.5508 12.8438 13.6189 12.2608C13.6667 11.8519 13.5637 11.9023 13.3013 12.4163C13.1235 12.7644 13.0727 12.8004 12.8403 12.7428C12.5408 12.6686 12.1233 12.3139 12.1964 12.1958C12.2234 12.1521 12.1127 12.1256 11.9503 12.137C11.7419 12.1516 11.6549 12.2078 11.6548 12.3279C11.6547 12.436 11.5799 12.498 11.4496 12.498C11.2967 12.498 11.2595 12.4547 11.3034 12.3279C11.3359 12.2343 11.2532 12.289 11.1197 12.4494C10.9862 12.6099 10.8753 12.7849 10.8732 12.8384C10.8712 12.8919 10.7943 13.0232 10.7024 13.1301C10.5283 13.3329 10.0001 13.4259 10.0001 13.2538C10.0001 13.1961 9.93998 13.2048 9.85586 13.2745C9.72848 13.3801 9.72848 13.4181 9.85586 13.5998C10.0719 13.9079 10.0451 14.1856 9.80541 14.123C9.69835 14.095 9.61076 14.1118 9.61076 14.1603C9.61076 14.3599 10.0988 14.2394 10.2549 14.0013C10.5363 13.5723 11.1802 13.2684 11.8911 13.2292C12.2417 13.2098 12.5535 13.2343 12.5839 13.2836C12.6144 13.3329 12.7258 13.3732 12.8314 13.3732C12.9396 13.3732 13.0619 13.4688 13.1115 13.592C13.1599 13.7124 13.2023 13.7525 13.2057 13.6812C13.2131 13.5254 13.45 13.5841 13.4673 13.746C13.474 13.8084 13.485 13.8983 13.4917 13.9458C13.5151 14.1121 14.7462 14.567 15.0004 14.5032C15.1376 14.4688 15.2724 14.4885 15.3094 14.5483C15.3566 14.6247 15.4046 14.6248 15.4808 14.5486C15.539 14.4904 15.7114 14.4428 15.864 14.4428L15.864 14.4429ZM12.9199 14.2485C12.9199 14.195 12.8735 14.1512 12.8168 14.1512C12.7601 14.1512 12.7408 14.195 12.7739 14.2485C12.807 14.3019 12.8533 14.3457 12.8769 14.3457C12.9006 14.3457 12.9199 14.3019 12.9199 14.2485ZM12.1204 14.0689C12.205 14.0152 12.1185 13.9516 11.853 13.8721C11.5112 13.7698 11.4071 13.7791 11.0466 13.9447L10.6327 14.1348L11.314 14.1415C11.6887 14.1452 12.0516 14.1125 12.1204 14.0689V14.0689ZM17.951 13.9221C17.9117 13.8196 18.0973 13.7762 18.7828 13.7276C19.2682 13.6931 19.8557 13.665 20.0883 13.665C20.321 13.665 20.5113 13.6403 20.5113 13.6101C20.5113 13.4804 19.8696 13.0275 19.603 12.969C19.3822 12.9206 19.2222 12.9644 18.9407 13.1505C18.7366 13.2855 18.5028 13.3703 18.4212 13.339C18.3291 13.3037 18.2728 13.3371 18.2728 13.4273C18.2728 13.5072 18.1642 13.6138 18.0314 13.6643C17.8709 13.7252 17.8091 13.806 17.8471 13.905C17.8786 13.9869 17.9262 14.054 17.953 14.054C17.9798 14.054 17.9789 13.9946 17.9511 13.9221H17.951ZM20.5687 12.5467C20.5335 12.4065 20.5496 12.3036 20.6068 12.3036C20.6614 12.3036 20.706 12.232 20.706 12.1446C20.706 12.0293 20.6499 12.0568 20.502 12.2447C20.2989 12.5027 20.3077 12.7898 20.5188 12.7898C20.5885 12.7898 20.6071 12.6995 20.5687 12.5467H20.5687ZM20.3145 11.7822C20.3134 11.7213 20.2267 11.7809 20.122 11.9146C19.8732 12.2324 19.8762 12.4213 20.1253 12.1226C20.2305 11.9963 20.3157 11.8432 20.3145 11.7822H20.3145ZM15.4628 10.5774C15.5838 10.4232 15.5804 10.4198 15.426 10.5407C15.2639 10.6678 15.2123 10.7476 15.2924 10.7476C15.3126 10.7476 15.3893 10.671 15.4628 10.5774V10.5774ZM11.9466 10.2207C11.9466 10.0004 11.8369 9.77518 11.7296 9.77518C11.6638 9.77518 11.6631 9.81583 11.7274 9.89673C11.7806 9.96359 11.8118 10.0949 11.7966 10.1885C11.7815 10.2821 11.809 10.3586 11.8578 10.3586C11.9065 10.3586 11.9465 10.2966 11.9465 10.2207H11.9466ZM24.2097 9.10486C24.2097 9.0571 24.1463 8.99369 24.0687 8.96395C23.9744 8.9278 23.9456 8.9566 23.9818 9.05079C24.0409 9.2046 24.2097 9.24466 24.2097 9.10486ZM23.8322 8.63254C23.7034 8.39524 23.1519 7.88237 23.091 7.94324C23.0469 7.98726 23.8067 8.80272 23.8917 8.80272C23.9098 8.80272 23.883 8.72614 23.8322 8.63254V8.63254ZM15.2975 24.5571C14.7782 24.4809 14.3798 24.3148 14.3798 24.1744C14.3798 24.1285 14.544 24.1266 14.7447 24.1703C15.3334 24.2983 16.3263 24.2562 16.3263 24.1032C16.3263 24.0316 16.4189 23.973 16.532 23.973C16.8824 23.973 17.436 23.5931 17.6649 23.1956C17.9273 22.7401 17.9441 22.616 17.7132 22.8399C17.3662 23.1762 16.7819 23.584 16.6468 23.584C16.5701 23.584 16.7369 23.3731 17.0174 23.1154C17.3341 22.8244 17.5002 22.6026 17.4555 22.5303C17.4158 22.4663 17.3325 22.4453 17.2702 22.4838C17.0627 22.6119 16.7738 22.6387 15.483 22.6495C14.7783 22.6553 14.1738 22.688 14.1396 22.722C14.1055 22.756 14.196 22.877 14.3408 22.9908C14.4856 23.1046 14.581 23.2209 14.5527 23.2491C14.4831 23.3187 13.8012 22.9738 13.7982 22.8675C13.7931 22.6868 13.1637 22.0767 12.9825 22.0767C12.5375 22.0767 12.758 21.6779 13.3775 21.3621C13.756 21.1692 13.9195 21.1552 15.6157 21.1706C16.6221 21.1798 17.7207 21.1884 18.0569 21.1897C18.608 21.192 18.6737 21.2138 18.723 21.4101C18.7532 21.53 18.751 21.6712 18.7184 21.7241C18.6857 21.7769 18.7042 21.8481 18.7594 21.8822C18.9428 21.9954 18.7401 22.1458 18.4754 22.0929C18.3322 22.0642 18.1513 22.081 18.0736 22.1302C17.9766 22.1915 17.9704 22.22 18.0538 22.2211C18.2309 22.2233 18.203 22.3972 18.0196 22.4342C17.8901 22.4604 17.9031 22.508 18.0968 22.7164C18.2838 22.9175 18.3153 23.0233 18.2559 23.2512C18.1277 23.7438 17.5445 24.2414 16.8409 24.4585C16.1711 24.6652 16.0763 24.6712 15.2974 24.557L15.2975 24.5571ZM16.9815 22.0142C17.4643 21.9228 17.7785 21.7363 17.45 21.7363C17.3658 21.7363 17.2209 21.6984 17.1279 21.6521C16.6675 21.4227 16.3068 21.3604 16.0681 21.4691C15.9021 21.5446 15.7736 21.5487 15.6621 21.4819C15.5724 21.4281 15.28 21.3893 15.0124 21.3956C14.5392 21.4068 14.5249 21.4157 14.4952 21.7176C14.4665 22.0101 14.4834 22.0281 14.7872 22.0295C14.9646 22.0304 15.1717 22.0702 15.2474 22.1181C15.3976 22.2131 16.1791 22.1663 16.9815 22.0142V22.0142ZM14.293 21.767C14.2546 21.6234 14.1638 21.4861 14.0913 21.462C14.0024 21.4324 13.9793 21.4699 14.0206 21.5772C14.0563 21.6704 14.0325 21.7376 13.9631 21.7394C13.8409 21.7426 14.1668 22.0281 14.2926 22.0281C14.3313 22.0281 14.3315 21.9106 14.2929 21.767H14.293ZM10.7479 22.9373C10.6442 22.8337 10.6698 22.5143 10.7817 22.5143C10.9256 22.5143 11.0162 22.8021 10.9068 22.9114C10.8559 22.9622 10.7844 22.9739 10.7479 22.9373V22.9373ZM15.061 19.7898C14.9808 19.737 14.6194 19.6045 14.2581 19.4954C13.8265 19.365 13.6011 19.2468 13.6011 19.1508C13.6011 19.0397 13.6769 19.0176 13.9175 19.0586C14.7749 19.2049 15.6709 19.1862 15.9735 19.0157C16.1901 18.8937 16.4532 18.8507 16.8878 18.8661C17.2235 18.8779 17.5253 18.9149 17.5587 18.9482C17.6869 19.0763 17.3659 19.2931 16.8811 19.4058C16.6027 19.4705 16.2384 19.6056 16.0715 19.7061C15.7416 19.9046 15.2924 19.9418 15.061 19.7898Z" fill="#4D0018" />
    </g>
  </svg>
);

export const HomeIcon = () => (
  <Svg viewBox="0 0 24 24">
    <g>
      <path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path>
      <path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path>
    </g>
  </Svg>
);

export const ExploreIcon = () => (
  <Svg viewBox="0 0 24 24">
    <g>
      <path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path>
    </g>
  </Svg>
);

export const BmIcon = () => (
  <Svg viewBox="0 0 24 24">
    <g>
      <path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"></path>
    </g>
  </Svg>
);

export const NotificationIcon = () => (
  <Svg viewBox="0 0 24 24">
    <g>
      <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path>
    </g>
  </Svg>
);

export const ProfileIcon = () => (
  <Svg viewBox="0 0 24 24">
    <g>
      <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
    </g>
  </Svg>
);

export const ThemeIcon = ({ color, sm }) => (
  <Svg
    color={color}
    sm={sm}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10v-20zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
  </Svg>
);

export const UploadFileIcon = () => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M21.3 0H2.7C1.212 0 0 1.212 0 2.7V21.3C0 22.788 1.212 24 2.7 24H21.3C22.788 24 24 22.788 24 21.3V2.7C24 1.212 22.788 0 21.3 0ZM2.7 1.8H21.3C21.7956 1.8 22.2 2.2044 22.2 2.7V14.3112L17.5704 9.6816C17.4024 9.5136 17.1744 9.4176 16.9344 9.4176H16.9308C16.6908 9.4176 16.4592 9.5136 16.2924 9.6864L11.112 14.9472L8.9364 12.78C8.7684 12.612 8.5404 12.516 8.3004 12.516C8.0688 12.48 7.8264 12.612 7.6584 12.7884L1.8 18.7704V2.7C1.8 2.2044 2.2044 1.8 2.7 1.8ZM1.8072 21.336L8.3088 14.6952L15.8472 22.2H2.7C2.2176 22.2 1.8276 21.8136 1.8072 21.336ZM21.3 22.2H18.396L12.3876 16.2156L16.938 11.5956L22.2 16.8564V21.3C22.2 21.7956 21.7956 22.2 21.3 22.2Z" />
    <path d="M8.2416 9.42126C9.26355 9.42126 10.092 8.59281 10.092 7.57086C10.092 6.54891 9.26355 5.72046 8.2416 5.72046C7.21966 5.72046 6.3912 6.54891 6.3912 7.57086C6.3912 8.59281 7.21966 9.42126 8.2416 9.42126Z" />
  </Svg>
);

export const LoadingIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z" />
  </Svg>
);

export const CommentIcon = () => (
  <DimmedSvg viewBox="0 0 24 24">
    <g>
      <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
    </g>
  </DimmedSvg>
);

export const HeartIcon = ({ onClick }) => (
  <DimmedSvg viewBox="0 0 24 24" onClick={onClick}>
    <g>
      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
    </g>
  </DimmedSvg>
);

export const RetweetIcon = ({ onClick, loading }) => (
  <DimmedSvg
    viewBox="0 0 24 24"
    onClick={onClick}
    loading={loading ? "loading" : ""}
  >
    <g>
      <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
    </g>
  </DimmedSvg>
);

export const RtFillIcon = ({ color, onClick, loading }) => (
  <Svg
    viewBox="0 0 24 24"
    color={color}
    loading={loading ? "loading" : ""}
    onClick={onClick}
  >
    <g>
      <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
    </g>
  </Svg>
);

export const HeartFillIcon = ({ color, onClick }) => (
  <Svg viewBox="0 0 24 24" color={color} onClick={onClick}>
    <g>
      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path>
    </g>
  </Svg>
);

export const TrashIcon = ({ loading, onClick }) => (
  <DimmedSvg
    viewBox="0 0 24 24"
    onClick={onClick}
    loading={loading ? "loading" : ""}
  >
    <g>
      <path d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"></path>
      <path d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"></path>
    </g>
  </DimmedSvg>
);

export const CrossIcon = () => (
  <Svg
    viewBox="0 0 24 24"
    class="r-nw8l94 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
  >
    <g>
      <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
    </g>
  </Svg>
);

export const DobIcon = () => (
  <Svg viewBox="0 0 24 24">
    <g>
      <path d="M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z"></path>
      <path d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"></path>
    </g>
  </Svg>
);

export const LinkIcon = () => (
  <Svg viewBox="0 0 24 24">
    <g>
      <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path>
      <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path>
    </g>
  </Svg>
);

export const LocationIcon = () => (
  <Svg viewBox="0 0 24 24">
    <g>
      <path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path>
      <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path>
    </g>
  </Svg>
);

export const UserIcon = ({ color, sm }) => (
  <Svg
    color={color}
    sm={sm}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
  </Svg>
);

export const ColorIcon = ({ color, sm }) => (
  <Svg
    color={color}
    sm={sm}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M8.997 13.985c.01 1.104-.88 2.008-1.986 2.015-1.105.009-2.005-.88-2.011-1.984-.01-1.105.879-2.005 1.982-2.016 1.106-.007 2.009.883 2.015 1.985zm-.978-3.986c-1.104.008-2.008-.88-2.015-1.987-.009-1.103.877-2.004 1.984-2.011 1.102-.01 2.008.877 2.012 1.982.012 1.107-.88 2.006-1.981 2.016zm7.981-4.014c.004 1.102-.881 2.008-1.985 2.015-1.106.01-2.008-.879-2.015-1.983-.011-1.106.878-2.006 1.985-2.015 1.101-.006 2.005.881 2.015 1.983zm-12 15.847c4.587.38 2.944-4.492 7.188-4.537l1.838 1.534c.458 5.537-6.315 6.772-9.026 3.003zm14.065-7.115c1.427-2.239 5.846-9.748 5.846-9.748.353-.623-.429-1.273-.975-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.04 3.995-2.811zm-12.622 4.806c-2.084-1.82-3.42-4.479-3.443-7.447-.044-5.51 4.406-10.03 9.92-10.075 3.838-.021 6.479 1.905 6.496 3.447l1.663-1.456c-1.01-2.223-4.182-4.045-8.176-3.992-6.623.055-11.955 5.466-11.903 12.092.023 2.912 1.083 5.57 2.823 7.635.958.492 2.123.329 2.62-.204zm12.797-1.906c1.059 1.97-1.351 3.37-3.545 3.992-.304.912-.803 1.721-1.374 2.311 5.255-.591 9.061-4.304 6.266-7.889-.459.685-.897 1.197-1.347 1.586z" />
  </Svg>
);

export const MoreIcon = (
  <Svg viewBox="0 0 24 24">
    <g>
      <path d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"></path>
      <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
    </g>
  </Svg>
);

export const SmilePlusIcon = () => (
  <svg
    fill="#637584"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.6 2.4V0H14.4V2.4H12V3.6H14.4V6H15.6V3.6H18V2.4H15.6ZM5.09999 9H3.59999V10.5H5.09999V9ZM8.69998 9H10.2V10.5H8.69998V9ZM7.02895 13.8H6.77113C6.29273 13.8015 5.82489 13.6594 5.42823 13.3919C5.03156 13.1245 4.72436 12.7441 4.54641 12.3H3.25378L3.42861 12.737C3.69384 13.4064 4.15461 13.9803 4.75084 14.384C5.34708 14.7877 6.05111 15.0023 6.77113 15H7.02895C7.74897 15.0023 8.45299 14.7877 9.04922 14.384C9.64544 13.9803 10.1062 13.4064 10.3714 12.737L10.5463 12.3H9.25363C9.07569 12.7441 8.76849 13.1245 8.37183 13.3919C7.97517 13.6594 7.50734 13.8015 7.02895 13.8ZM0 11.1C0 7.29533 3.09532 4.2 6.9 4.2C10.7047 4.2 13.8 7.29533 13.8 11.1C13.8 14.9047 10.7047 18 6.9 18C3.09532 18 0 14.9047 0 11.1ZM1.2 11.1C1.2 14.243 3.75701 16.8 6.9 16.8C10.043 16.8 12.6 14.243 12.6 11.1C12.6 7.95702 10.043 5.4 6.9 5.4C3.75701 5.4 1.2 7.95702 1.2 11.1Z"
    />
  </svg>
);

export const SmileIcon = () => (
  <svg
    fill="#637584"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 18C4.03702 18 0 13.963 0 9C0 4.03702 4.03702 0 9 0C13.963 0 18 4.03702 18 9C18 13.963 13.963 18 9 18ZM9 1.25581C4.73024 1.25581 1.25581 4.73024 1.25581 9C1.25581 13.2697 4.73024 16.7442 9 16.7442C13.2697 16.7442 16.7442 13.2697 16.7442 9C16.7442 4.73024 13.2697 1.25581 9 1.25581Z" />
    <path d="M8.99985 13.2824C7.41588 13.2824 5.95829 12.4871 5.10183 11.1525C4.91429 10.8611 4.99886 10.4744 5.29104 10.286C5.58239 10.0968 5.97086 10.1822 6.15839 10.4752C6.78379 11.4481 7.8462 12.0282 9.00075 12.0282C10.1552 12.0282 11.2177 11.4481 11.8439 10.4761C12.0314 10.1831 12.4199 10.0993 12.7112 10.2877C13.0043 10.4752 13.088 10.8637 12.9005 11.1551C12.0423 12.4895 10.5848 13.2857 9.00075 13.2857L8.99985 13.2824Z" />
    <path d="M11.2923 8.10923C11.9756 8.10923 12.5296 7.5552 12.5296 6.87183C12.5296 6.18843 11.9756 5.63443 11.2923 5.63443C10.6089 5.63443 10.0549 6.18843 10.0549 6.87183C10.0549 7.5552 10.6089 8.10923 11.2923 8.10923Z" />
    <path d="M6.70767 8.10923C7.39106 8.10923 7.94505 7.5552 7.94505 6.87183C7.94505 6.18843 7.39106 5.63443 6.70767 5.63443C6.02428 5.63443 5.47028 6.18843 5.47028 6.87183C5.47028 7.5552 6.02428 8.10923 6.70767 8.10923Z" />
  </svg>
);