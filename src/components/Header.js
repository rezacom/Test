import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Header() {
    return (
        <div className="header flex items-center justify-end">
            <div className="header__user">
                <span>Babak Arghavan</span>
                <ExpandMoreIcon />
            </div>
        </div>
    )
}
