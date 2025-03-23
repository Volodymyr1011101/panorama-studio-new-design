// 'use client';
// import { Select } from 'antd';
// import { useChangeLocale } from '../../../../locales/client';
// import styles from './LangSwitcher.module.scss';
// export default function LangSwitcher({ lang }: { lang: string }) {
//     const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);
//     return (
//         <div className={styles.switcher}>
//             <Select
//                 style={{ width: 70 }}
//                 defaultValue={lang}
//                 className={styles.test}
//                 //@ts-ignore
//                 onChange={e => changeLocale(e)}
//                 options={[
//                     { value: 'pl-Pl', label: 'PL' },
//                     { value: 'ua', label: 'UA' }
//                 ]}
//             />
//         </div>
//     );
// }
