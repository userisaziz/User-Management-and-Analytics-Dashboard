import React from 'react';

const ServiceIcon = ({ color = '#163877' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
			<path
				d="M10.6734 1.56562C10.4344 1.65 10.1391 1.86094 10.0031 2.03906C9.77344 2.33906 9.70312 2.5875 9.65156 3.26719C9.58594 4.15781 9.60938 4.09219 9.29531 4.19062C9.14531 4.2375 8.81719 4.36875 8.56406 4.47656L8.10938 4.67812L7.58906 4.2375C6.87188 3.62344 6.79219 3.58594 6.21094 3.58594C5.57812 3.58594 5.49375 3.6375 4.57969 4.5375C3.64688 5.46094 3.58594 5.56406 3.58594 6.21094C3.58594 6.79219 3.62344 6.87187 4.24219 7.59844C4.49063 7.88437 4.68281 8.13281 4.67344 8.15156C4.56094 8.36719 4.32656 8.91562 4.22813 9.20156C4.13438 9.47344 4.07812 9.57187 4.00781 9.58594C3.95625 9.59531 3.61875 9.62812 3.25781 9.65156C2.67656 9.69844 2.56875 9.71719 2.31094 9.84375C2.01563 9.98906 1.78594 10.2187 1.6125 10.5469C1.53281 10.6969 1.52344 10.8281 1.52344 12C1.52344 13.1719 1.53281 13.3031 1.6125 13.4531C1.78594 13.7812 2.01563 14.0109 2.31094 14.1562C2.57812 14.2875 2.67656 14.3062 3.34688 14.3578L4.0875 14.4141L4.24219 14.8359C4.32188 15.0656 4.45781 15.3984 4.5375 15.5719L4.68281 15.8906L4.2375 16.4062C3.62344 17.1281 3.58594 17.2078 3.58594 17.7891C3.58594 18.1922 3.6 18.2859 3.69844 18.4688C3.84844 18.7594 5.19375 20.1094 5.50313 20.2828C5.71875 20.4047 5.78438 20.4141 6.21094 20.4141C6.7875 20.4141 6.88125 20.3719 7.56094 19.7906C7.82344 19.5609 8.0625 19.3641 8.09063 19.3453C8.11875 19.3312 8.2875 19.3875 8.46563 19.4719C8.64375 19.5609 8.95781 19.6875 9.16406 19.7625C9.37031 19.8328 9.54844 19.8984 9.5625 19.9078C9.57188 19.9172 9.60938 20.2547 9.64219 20.6531C9.68906 21.2437 9.72188 21.4312 9.81563 21.6328C9.94688 21.9234 10.2234 22.2188 10.5094 22.3687C10.7063 22.4719 10.7438 22.4766 12 22.4766C13.2563 22.4766 13.2938 22.4719 13.4906 22.3687C13.9641 22.1156 14.3016 21.5953 14.3109 21.1031C14.3203 20.5406 13.9125 20.2078 13.3359 20.3156C13.1203 20.3578 12.8578 20.6203 12.8156 20.8359L12.7875 21H11.9953H11.2031V20.8453C11.2031 20.7656 11.1703 20.3344 11.1328 19.8891C11.0484 18.8109 10.9828 18.6984 10.3406 18.5156C9.7875 18.3562 9.37969 18.1922 8.76563 17.8734C8.22188 17.5922 8.16563 17.5687 7.95 17.5969C7.69219 17.625 7.66406 17.6437 6.81563 18.3703L6.21094 18.8906L5.6625 18.3422C5.18906 17.8734 5.11875 17.7844 5.17031 17.7188C5.20781 17.6812 5.42344 17.4281 5.65313 17.1562C6.34688 16.3453 6.375 16.3031 6.40313 16.05C6.43125 15.8344 6.4125 15.7828 6.12656 15.2344C5.80781 14.6203 5.64375 14.2125 5.48438 13.6594C5.30156 13.0172 5.18906 12.9516 4.11094 12.8672C3.66563 12.8297 3.23438 12.7969 3.15469 12.7969H3V12V11.2031H3.15469C3.23438 11.2031 3.66563 11.1703 4.11094 11.1328C5.18906 11.0484 5.30156 10.9828 5.48438 10.3406C5.64375 9.79219 5.80781 9.38437 6.12188 8.775C6.42656 8.18437 6.46875 8.01094 6.375 7.75312C6.34688 7.68281 6.07969 7.34062 5.77969 6.98906C5.47969 6.6375 5.20781 6.31875 5.175 6.28125C5.11875 6.21562 5.18906 6.13125 5.6625 5.65781L6.21094 5.10938L6.81563 5.62969C7.66406 6.35625 7.69219 6.375 7.95 6.40312C8.16563 6.43125 8.21719 6.4125 8.76563 6.12656C9.36563 5.8125 9.74531 5.65781 10.3406 5.48438C10.9828 5.30156 11.0484 5.18906 11.1328 4.11094C11.1703 3.66562 11.2031 3.23438 11.2031 3.15V3H11.7328C12.1734 3 12.2812 2.98594 12.4125 2.90625C12.6375 2.76562 12.75 2.55469 12.75 2.25C12.75 1.94531 12.6375 1.73438 12.4125 1.59375C12.2766 1.50937 12.1781 1.5 11.5547 1.5C11.0859 1.50469 10.7906 1.52344 10.6734 1.56562Z"
				fill={color}
			/>
			<path
				d="M15.2581 1.63126C14.0206 2.31095 13.1488 3.48282 12.8441 4.86564C12.7269 5.39064 12.7175 6.36564 12.8253 6.88126C13.0831 8.13282 13.8566 9.31407 14.8456 9.95626L15.0003 10.0547V15.1922C15.0003 20.8875 14.9816 20.5125 15.3144 21.15C15.6191 21.7313 16.2378 22.2234 16.9175 22.425C17.255 22.5234 17.9956 22.5234 18.3331 22.425C19.0128 22.2234 19.6316 21.7313 19.9363 21.15C20.2691 20.5125 20.2503 20.8875 20.2503 15.1922V10.0547L20.405 9.95626C21.1878 9.44532 21.9378 8.46564 22.2566 7.52345C22.6128 6.46407 22.5847 5.12345 22.1769 4.10626C21.7503 3.03751 20.9019 2.09064 19.9363 1.59845C19.5331 1.39689 19.0503 1.50001 18.8441 1.83751C18.755 1.98282 18.7503 2.07657 18.7503 3.73126V5.46564L18.1972 5.68595L17.6441 5.90626L17.0722 5.68595L16.5003 5.46564V3.73126C16.5003 2.07657 16.4956 1.98282 16.4066 1.83751C16.1863 1.47657 15.6941 1.38751 15.2581 1.63126ZM15.08 6.39845C15.1878 6.59064 15.3331 6.66564 16.3644 7.07814C17.1566 7.39689 17.4613 7.50001 17.63 7.50001C17.7941 7.50001 18.0941 7.40157 18.8488 7.10157C19.9691 6.65157 20.03 6.61876 20.1566 6.40782C20.241 6.27189 20.2503 6.16407 20.2503 5.06251C20.2503 3.8672 20.2503 3.8672 20.3441 3.98439C20.7191 4.46251 20.9535 5.20782 20.9535 5.92032C20.9535 7.19064 20.3628 8.16564 19.1206 8.9297C19.0363 8.98126 18.9238 9.08439 18.8722 9.1547C18.7738 9.28595 18.7738 9.30939 18.7503 14.6859C18.7269 19.7578 18.7222 20.0953 18.6425 20.2734C18.3097 21.0094 17.3816 21.1875 16.8425 20.6203C16.5003 20.2594 16.5285 20.6953 16.5003 14.6859C16.4769 9.30939 16.4769 9.28595 16.3785 9.1547C16.3269 9.08439 16.2144 8.98126 16.13 8.9297C15.68 8.65314 15.2253 8.26876 15.005 7.98282C14.5175 7.3547 14.2972 6.70782 14.2972 5.92032C14.2972 5.21251 14.466 4.64532 14.855 4.05939L14.9769 3.87189L15.0003 5.09064C15.0144 5.88282 15.0425 6.33751 15.08 6.39845Z"
				fill={color}
			/>
			<path
				d="M10.6078 6.91405C8.83594 7.36874 7.40625 8.79842 6.90469 10.6172C6.78281 11.0578 6.77344 11.1422 6.77344 12C6.77344 12.8015 6.7875 12.9609 6.88125 13.3031C7.43438 15.3328 9.01406 16.8 11.0578 17.1844C11.6203 17.2922 12.7641 17.2547 13.2891 17.114C14.0672 16.9078 14.2688 16.7109 14.2406 16.1859C14.2219 15.9281 14.2031 15.8719 14.0625 15.7265C13.7813 15.4359 13.5844 15.4172 12.8906 15.6094C12.4359 15.7359 11.7 15.75 11.2031 15.6328C10.1391 15.3891 9.20156 14.6578 8.69531 13.6828C8.38125 13.0734 8.28281 12.5953 8.31094 11.8359C8.34375 11.039 8.47969 10.6078 8.89219 9.96561C9.15938 9.55311 9.55313 9.15936 9.96563 8.89217C10.3922 8.6203 10.6641 8.50311 11.1984 8.36717C11.8125 8.21249 12 8.01561 12 7.53749C12 7.09686 11.6906 6.79217 11.2406 6.79686C11.1328 6.80155 10.8469 6.85311 10.6078 6.91405Z"
				fill={color}
			/>
		</svg>
	);
};

export default ServiceIcon;