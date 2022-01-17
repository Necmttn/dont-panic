import { Button } from "@dont-panic/ui";
import fs from 'fs';
import _ from "lodash";
import Link from "next/link";
import path from 'path';

export default function Web(props) {
  console.log(props)
  return (
    <div className="min-h-screen">
      <div className="bg-black h-screen flex items-center justify-center flex-col">
        <h1 className="text-[10rem] font-mono text-yellow-300 font-bold leading-none">DON{"'"}T <br /> PANIC!</h1>
        <Button>
          Start
          </Button>
          <div>
            {props.paths.map((path, index) => {
              return (<div className="text-white" key={`l-${index}`}>
                <Link href={`/learn/${path.params.slug.join("/")}`}>
                  {path.params.slug.join(" - ")}
                </Link>
                </div>
                )
            })}
          </div>
      </div>
    </div>
  );
}



export const getStaticProps = async () => {
  const a = fs
  .readdirSync(path.join(process.cwd(), 'node_modules', '@dont-panic'))
  .filter(packageName => packageName.startsWith('learn-'))
  .map(learnPackageName => {
    return fs.readdirSync(path.join(process.cwd(), 'node_modules', '@dont-panic', learnPackageName, 'content'))
    .map(contentName => {
      return [learnPackageName.replace('learn-', ''), contentName.replace('.mdx', '')]
    })
  })
  const paths = _.flatten(a).map(slug => {
    return {
      params: {
        slug
      }
    }
  })
  return {
    props: {
      paths
    }
  }
}