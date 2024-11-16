import getConfig from 'next/config';

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// Will only be available on the server-side
console.log("RuntimeConfig server", serverRuntimeConfig);
// Will be available on both server-side and client-side
console.log("RuntimeConfig browser", publicRuntimeConfig);

export default function Home(props) {
  return (
    <div>
      <div>COMMAN_VAR_A: {props.COMMAN_VAR_A}</div>
      <div>COMMAN_VAR_B: {props.COMMAN_VAR_B}</div>
      <div>PUB COMMON_VAR_A: {process.env.NEXT_PUBLIC_COMMON_VAR_A}</div>
      <div>PUB COMMON_VAR_B: {process.env.NEXT_PUBLIC_COMMON_VAR_B}</div>
      <div>BASEURL: {props.BASEURL}</div>
    </div>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      COMMAN_VAR_A: serverRuntimeConfig.COMMAN_VAR_A,
      COMMAN_VAR_B: serverRuntimeConfig.COMMAN_VAR_B,
      BASEURL: serverRuntimeConfig.BASEURL,
    },
  };
};
