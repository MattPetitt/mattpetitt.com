import Menu from 'components/Menu'
import Bio from 'pages/projects/bio'
import Upj from 'pages/projects/upj'
import Synapsify from 'pages/projects/synapsify'
import CollectForKids from 'pages/projects/collect-for-kids'
import CardDesigner from 'pages/projects/card-designer'
import CardCapture from 'pages/projects/card-capture'
import CardPortal from 'pages/projects/card-portal'
import CuriositystreamApp from 'pages/projects/curiositystream-app'
import CuriositystreamMarketing from 'pages/projects/curiositystream-marketing'
import CuriositystreamAdmin from 'pages/projects/curiositystream-admin'

function Projects() {
    return (
        <>
            <Menu />
            <main>
                <header>
                    <h1>Projects</h1>
                </header>
                <Bio isPreview={true} />
                <Upj isPreview={true} />
                <Synapsify isPreview={true} />
                <CollectForKids isPreview={true} />
                <CardDesigner isPreview={true} />
                <CardCapture isPreview={true} />
                <CardPortal isPreview={true} />
                <CuriositystreamApp isPreview={true} />
                <CuriositystreamMarketing isPreview={true} />
                <CuriositystreamAdmin isPreview={true} />
            </main>
        </>
    )
}

export default Projects
