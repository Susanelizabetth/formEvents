import TitleStep from './TitleStep';

export default function StepBox({ children, title, subtitle }) {
    return(
        <div className="columns is-multiline">
            <TitleStep title={title} subtitle={subtitle}/>
            <div className='column is-8'>
                {children}
            </div>
        </div>
    )
};
