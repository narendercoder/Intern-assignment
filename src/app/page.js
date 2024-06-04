import { Suspense, lazy } from "react";
import Loading from "./Loading";
import HomePage from "./Pages/HomePage";


export default async function Home() {
  await wait(1000)
  return (
    <div className="w-screen h-full overflow-x-hidden">
      <Suspense
        fallback={
          <>
            <Loading />
          </>
        }
      >
        <HomePage />
      </Suspense>
    </div>
  );
}

export async function wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

