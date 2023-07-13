import { Avatar, Dropdown, Typography } from 'antd';

const { Text } = Typography;

function LanguageSwitcher({ lang, languages, onClick }) {
    function getFlag(lang) {
        return (
            <>
                <Avatar
                    shape="circle"
                    src={`/${lang}.png`}
                />
            </>
        );
    }
    const menuItems = languages.map(item => ({
        key: item.lang,
        label: item.label,
        icon: getFlag(item.lang),
    }));
    const SelectedLang = languages.find(item => item.lang === lang);
    return (
        <div className="LanguageSwitcher">
            <Dropdown menu={{
                items: menuItems,
                onClick: ({ key }) => onClick(key)
            }}>
                <div style={{ cursor: "pointer" }}>
                    <Avatar  shape="circle"
                        style={{
                            marginRight: 10,
                        }}
                        src={`/${lang}.png`} />
                    <Text style={{
                        display: 'inline-block',
                        width: '2em',
                    }}>{SelectedLang.label}</Text>
                </div>
            </Dropdown>
        </div>
    );
}

export default LanguageSwitcher;
