import Link from 'next/link';

export default () => (
    <header className="bg-black-90 w-100 ph2 pv2 pv3-ns ph3-m ph4-l">
        <nav className="f6 fw6 ttu tc center">
            <Link href="/"><a className="link dim white dib mr3" title="Home">Home</a></Link>
            <Link href="/random"><a className="link dim white dib mr3" title="About">Random Quiz</a></Link>
        </nav>
    </header>
);
