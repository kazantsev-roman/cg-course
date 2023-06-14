#pragma once
#include "GeometryObjectWithInitialTransformImpl.h"
#include "TriangleMesh.h"

class CCube : public CGeometryObjectWithInitialTransformImpl
{
public:
	CCube(CMatrix4d const& transform = CMatrix4d());

	virtual bool Hit(CRay const& ray, CIntersection& intersection)const;
private:
	const static CTriangleMeshData m_triangleMeshData;
	CTriangleMesh m_triangleMesh;
};
