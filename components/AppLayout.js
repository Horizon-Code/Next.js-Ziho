import styles, {globalStyles} from './styles';
/**
 * 
 * AppLayout will give us the global styles
 */

export default function AppLayout({children}) {
    return (
        <>  <div>
             <main>
                {children}
             </main>
            </div>
            <style jsx>{styles}</style>
            <style jsx global>{globalStyles}</style>
        </>
    )
}