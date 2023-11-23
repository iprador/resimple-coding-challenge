export default function Title({ title, description }) {
    return <div className="title">
        <h1 className="title__h1">{title ?? 'ReSimple'}</h1>
        <p className="title__p">{description ?? 'Prueba técnica.'}</p>
    </div>
}